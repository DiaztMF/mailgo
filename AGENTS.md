# Mailgo — Email Campaign Service

Landing page service email marketing dengan animated UI (framer-motion).

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: motion/react (micro-interactions)
- **Database**: Drizzle ORM + Supabase Postgres (`mailgo` schema)
- **Validation**: zod
- **Auth**: None (form submission only)
- **Deployment**: Standalone

## Architecture
- 1 Supabase project, multi-schema. Mailgo pake schema `mailgo`
- Drizzle client: `search_path = mailgo`
- DATABASE_URL dari Supabase yang sama dengan 4 project lainnya
- framer-motion untuk entrance animations & micro-interactions
- Subscriber list: dummy data seeded via script

## Database Schema (`mailgo`)
- `campaigns` — id, nama, deskripsi, fitur (JSON), harga (int), created_at
- `subscribers` — id, email, subscribed_at (dummy showcase)
- `contacts` — id, nama, email, pesan, created_at

## Routes
| Route | Page | Description |
|---|---|---|
| `/` | `app/page.js` | Landing: Hero, Features, Pricing, Testimonials, CTA |
| `/login` | `app/login/page.js` | Static login page (showcase only, no backend) |

## Constraints
- TypeScript
- App Router
- Tidak ada auth — login page cuma showcase visual
- motion/react untuk mikro-interaksi (menggantikan framer-motion)
- shadcn/ui untuk komponen UI
- Subscriber list hanya dummy (no actual newsletter sending)
- Tidak ada integrasi email service (SendGrid, etc)

## Migration Notes
- Template asli: Next.js 13 Pages Router → Next.js 16 App Router
- `pages/` → `app/`
- LayoutEffect.jsx → App Router layout with motion/react
- Login page tetap dipertahankan sebagai static showcase

## Non-Goals
- Tidak ada integrasi email sending (SendGrid, SES, etc)
- Tidak ada campaign analytics
- Tidak ada auth/login functionality
- Tidak ada subscriber management dashboard

## Deployment
- Ikuti playbook wajib: docs/superpowers/DEPLOYMENT.md (shared Supabase spam-projects, pooler 6543, branch master, CI tsc+build) sebelum coding maupun deploy.
