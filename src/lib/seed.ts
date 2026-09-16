import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
dotenv.config();

import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import { initialCampaigns, initialSubscribers } from "./seed-data";

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set in environment.");
  }

  console.log("Connecting to database for seeding...");
  const sql = postgres(url, { prepare: false, max: 1 });
  const db = drizzle(sql, { schema });

  try {
    // 1. Ensure schema exists
    await sql`CREATE SCHEMA IF NOT EXISTS mailgo;`;
    console.log("Schema mailgo verified/created.");

    // 2. Create tables if not exist
    await sql`
      CREATE TABLE IF NOT EXISTS mailgo.campaigns (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        features JSONB NOT NULL,
        price INTEGER NOT NULL,
        is_most_popular BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS mailgo.subscribers (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        subscribed_at TIMESTAMP NOT NULL DEFAULT NOW(),
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS mailgo.contacts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `;
    console.log("Tables verified in mailgo schema.");

    // 3. Seed campaigns if empty
    const existingCampaigns = await db.select().from(schema.campaigns);
    if (existingCampaigns.length === 0) {
      await db.insert(schema.campaigns).values(initialCampaigns);
      console.log(`Seeded ${initialCampaigns.length} campaigns.`);
    } else {
      console.log(`Campaigns already have ${existingCampaigns.length} rows.`);
    }

    // 4. Seed subscribers if empty
    const existingSubscribers = await db.select().from(schema.subscribers);
    if (existingSubscribers.length === 0) {
      await db.insert(schema.subscribers).values(initialSubscribers);
      console.log(`Seeded ${initialSubscribers.length} dummy subscribers.`);
    } else {
      console.log(`Subscribers already have ${existingSubscribers.length} rows.`);
    }

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    await sql.end();
  }
}

main();
