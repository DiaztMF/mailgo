import {
  pgSchema,
  serial,
  integer,
  text,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";

export const mailgo = pgSchema("mailgo");

export const campaigns = mailgo.table("campaigns", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  features: jsonb("features").$type<string[]>().notNull(),
  price: integer("price").notNull(),
  isMostPopular: boolean("is_most_popular").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const subscribers = mailgo.table("subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  subscribedAt: timestamp("subscribed_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contacts = mailgo.table("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Campaign = typeof campaigns.$inferSelect;
export type NewCampaign = typeof campaigns.$inferInsert;
export type Subscriber = typeof subscribers.$inferSelect;
export type NewSubscriber = typeof subscribers.$inferInsert;
export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;
