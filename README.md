# Mailgo

Intelligent email marketing and campaign service landing page built with Next.js 15 (App Router), TypeScript, Drizzle ORM, and Supabase Postgres.

## Pages / Routes

| Route | Page | Description |
|---|---|---|
| `/` | `app/page.tsx` | Main landing page featuring Hero, Features, VisualFeatures, Pricing, Subscriber counter, and FAQs |
| `/login` | `app/login/page.tsx` | Static authentication showcase page |
| `POST /api/seed` | `app/api/seed/route.ts` | Idempotent database seeding endpoint (POST only, GET 405) |

## Project Structure

```text
app/
├── api/seed/route.ts       # POST /api/seed — idempotent database seed endpoint
├── login/
│   └── page.tsx            # Static showcase login route
├── layout.tsx              # Root layout with navbar and footer
└── page.tsx                # Main landing page (ISR revalidate = 60)
components/
├── ui/                     # UI components (Hero, Features, VisualFeatures, Pricing, FAQs, CTA, etc.)
├── ContactForm.tsx         # Interactive client contact form with feedback states
├── SectionWrapper.jsx      # Section container wrapper
└── GradientWrapper.jsx     # Gradient background wrapper
src/
├── actions/
│   └── contact.ts          # Server Action for contact submission with Zod validation
└── lib/
    ├── db.ts               # Drizzle ORM client (search_path=mailgo, prepare=false)
    ├── schema.ts           # PostgreSQL schema (campaigns, subscribers, contacts)
    ├── queries.ts          # Queries for campaigns, subscriber stats, and contacts with fallbacks
    ├── seed-data.ts        # Initial campaigns and subscribers demo data
    └── seed.ts             # CLI seed script
drizzle/                    # Drizzle generated SQL migrations
public/                     # Static assets, SVG illustrations, and icons
.github/workflows/
└── ci.yml                  # GitHub Actions CI workflow (tsc + build)
```

## Tech Stack

- **Next.js 15 (App Router)** — React 19 server components, ISR caching, and server actions
- **React 19** — Foundation UI library
- **TypeScript** — Strict type safety across schema, queries, and server actions
- **Drizzle ORM & postgres-js** — Type-safe PostgreSQL client with Supabase transaction pooler support
- **Tailwind CSS** — Utility-first responsive styling
- **Zod** — Schema declaration and validation for contact submissions
- **motion & framer-motion** — Micro-interactions and scroll-in-view transitions

## Scripts

| Script | Command | Description |
|---|---|---|
| Dev | `pnpm dev` | Start local development server on `localhost:3000` |
| Build | `pnpm build` | Production build |
| Start | `pnpm start` | Serve production build |
| Lint | `pnpm lint` | Run ESLint |
| DB Generate | `pnpm db:generate` | Generate SQL migrations from `src/lib/schema.ts` |
| DB Migrate | `pnpm db:migrate` | Apply pending database migrations |
| DB Seed | `pnpm db:seed` | Seed initial campaigns and subscribers (`tsx src/lib/seed.ts`) |

## Quick Start

Requires [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm build
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
