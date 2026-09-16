# mailgo

Intelligent email marketing and campaign service landing page built with Next.js App Router, TypeScript, Drizzle ORM, and Supabase Postgres.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-orange)](https://orm.drizzle.team/)

## Installation

```bash
git clone https://github.com/DiaztMF/mailgo.git
cd mailgo
pnpm install
```

TypeScript types are included out of the box.

## Quick Start

1. Configure `.env.local`:

```bash
DATABASE_URL="postgresql://postgres.[REF]:[PASSWORD]@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres"
```

2. Run development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## What is mailgo?

`mailgo` is an email marketing platform landing page demonstrating high-conversion product showcases, dynamic campaign tier pricing, live audience counter statistics, and direct customer outreach workflows.

## Why mailgo?

Marketing sites often suffer from static counters and hardcoded pricing that require constant code deployments. `mailgo` provides:

- **Live Counter & Campaign Feeds**: Renders subscriber numbers and tiers queried directly from the `mailgo` PostgreSQL schema.
- **Micro-Interaction Polish**: Combines modern animations with accessible forms and feedback states.
- **Incremental Static Regeneration**: Employs `revalidate = 60` for ultra-fast TTFB and fresh content.

## Routes & API

### Pages

| Route | Type | Description |
|---|---|---|
| `/` | ISR (60s) | Main product showcase, animated features, pricing, and contact form |
| `/login` | Static | Visual authentication showcase page |

### Endpoints & Server Actions

#### `POST /api/seed`
Idempotent route handler that seeds initial campaigns and dummy subscribers into `mailgo` tables.

- **Response:** `{ ok: boolean, campaigns?: number, subscribers?: number, skipped?: boolean }`

#### `submitContact(prevState, formData)`
Server Action located in `src/actions/contact.ts` processing client contact messages.

| Field | Type | Validation |
|---|---|---|
| `name` | `string` | Minimum 2 characters |
| `email` | `string` | Valid email address |
| `message` | `string` | Minimum 5 characters |

## Examples

### Fetching Campaign Plans

```typescript
import { getCampaigns, getSubscribersCount } from "@/src/lib/queries";

// Fetch campaign pricing options and aggregate subscribers count
const [campaigns, count] = await Promise.all([
  getCampaigns(),
  getSubscribersCount(),
]);
```

## Architecture & Development Guides

For deeper technical context and conventions:

- **[AGENTS.md](./AGENTS.md)** — Architectural conventions, multi-schema requirements, and verification guidelines.

## License

MIT - see [LICENSE](./LICENSE) for details.
