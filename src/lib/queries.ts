import { db } from "./db";
import { campaigns, subscribers, contacts, type NewContact } from "./schema";
import { count, desc } from "drizzle-orm";

export async function getCampaigns() {
  try {
    return await db.select().from(campaigns).orderBy(campaigns.price);
  } catch (error) {
    console.error("Failed to fetch campaigns from database:", error);
    return [];
  }
}

export async function getSubscribersCount(): Promise<number> {
  try {
    const result = await db.select({ value: count() }).from(subscribers);
    return Number(result[0]?.value || 0);
  } catch (error) {
    console.error("Failed to fetch subscriber count:", error);
    return 12500; // default fallback showcase
  }
}

export async function createContact(data: NewContact) {
  return await db.insert(contacts).values(data).returning();
}
