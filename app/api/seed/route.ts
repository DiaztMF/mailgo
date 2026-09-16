import { NextResponse } from "next/server";
import { db, closeDb } from "@/src/lib/db";
import { campaigns, subscribers } from "@/src/lib/schema";
import { initialCampaigns, initialSubscribers } from "@/src/lib/seed-data";

export async function POST(): Promise<NextResponse> {
  try {
    const existing = await db
      .select({ id: campaigns.id })
      .from(campaigns)
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json({
        ok: true,
        skipped: true,
        message: "mailgo tables already contain rows.",
      });
    }

    const insertedCampaigns = await db
      .insert(campaigns)
      .values(initialCampaigns)
      .returning({ id: campaigns.id, name: campaigns.name });

    const insertedSubscribers = await db
      .insert(subscribers)
      .values(initialSubscribers)
      .returning({ id: subscribers.id });

    return NextResponse.json({
      ok: true,
      campaigns: insertedCampaigns.length,
      subscribers: insertedSubscribers.length,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("[api/seed] seed failed:", error);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  } finally {
    await closeDb();
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { ok: false, error: "Method Not Allowed. Use POST." },
    { status: 405, headers: { Allow: "POST" } }
  );
}
