import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

export type Database = PostgresJsDatabase<typeof schema>;

type Client = ReturnType<typeof postgres>;

let client: Client | null = null;
let instance: Database | null = null;

function createDb(): Database {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Add DATABASE_URL to .env.local before connecting to the database."
    );
  }
  client = postgres(url, {
    // Required for Supabase connection pooler (port 6543): no prepared statements
    prepare: false,
    connection: { search_path: "mailgo" },
    max: 10,
  });
  return drizzle(client, { schema });
}

export function getDb(): Database {
  if (!instance) {
    instance = createDb();
  }
  return instance;
}

export async function closeDb(): Promise<void> {
  if (client) {
    await client.end();
    client = null;
    instance = null;
  }
}

export const db: Database = new Proxy({} as Database, {
  get(_target, prop) {
    const real = getDb() as unknown as Record<PropertyKey, unknown>;
    const value = real[prop];
    return typeof value === "function" ? value.bind(real) : value;
  },
});
