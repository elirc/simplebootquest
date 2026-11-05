# Architecture

## Overview
A browser SPA (React + Vite) talks to an Express 5 API over JSON. The API uses Prisma to reach PostgreSQL. In production, one Node process serves both the API (`/api/*`) and the built SPA. Learner code never runs on the server: it runs in a Web Worker in the browser.

Request flow: browser → `apps/web/src/api.ts` (fetch with cookies) → Express (`apps/api/src/app.ts`: helmet, JSON body parsing, cookies, optional auth) → router in `src/routes/` → service in `src/services/` → Prisma → Postgres.

## Where things live
- `apps/api/src/routes/`: `auth.ts`, `quests.ts` (curriculum, submissions, quizzes, design docs), `me.ts` (profile, leaderboard)
- `apps/api/src/auth.ts`: password hashing, the JWT cookie, `requireAuth`. `src/errors.ts`: `HttpError`, `parse()` (Zod), the error handler
- `apps/api/src/services/progress.ts`: completions, XP and streaks
- `apps/api/prisma/schema.prisma`: the data model. The client is generated into `src/generated/prisma`
- `apps/web/src/pages/`: route components. `components/`: shared UI
- `packages/shared`: types and XP/level logic used by both sides
- `packages/runner`: runs learner code against tests (worker in the browser, worker_threads in validation)
- `content/tracks/`: the curriculum as files

## Key flows
- **Signup**: `POST /api/auth/register` in `routes/auth.ts` (rate limited) validates with `parse()` → `hashPassword()` (bcrypt) → `db.user.create` → `signToken()` and the cookie options from `src/auth.ts`.
- **Completing a code quest**: the web runner passes in the browser → `POST /api/quests/:slug/submissions` (`routes/quests.ts`) → `services/progress.ts` checks the quest exists in the curriculum, records the completion once (idempotent), awards XP once, and updates the streak.

## Invariants
- Every progress query is scoped by `req.user.id`, so never trust ids from the body.
- XP is awarded only on the first completion (a unique constraint on `(userId, questSlug)`).
- Quest slugs are permanent ids: never rename a slug, only titles.
- Quiz answers are graded on the server. The client never receives the `answer` field.

## Common changes
**Add an API endpoint**: 1) add a Zod schema and validate with `parse()`, 2) add the handler in the right router, throwing `HttpError` for failures, 3) add a Supertest test in `apps/api/test/`, 4) add the typed client call in `apps/web/src/api.ts`.

**Change the schema**: edit `apps/api/prisma/schema.prisma` → `npm run db:migrate` (creates and applies a migration and regenerates the client) → update the services and tests.

## Sharp edges
- Forgetting to regenerate the Prisma client after a schema edit gives confusing type errors.
- Integration tests need Postgres running and `TEST_DATABASE_URL` set.
- Content changes must pass `npm run validate:content` (solutions pass, starters fail).
