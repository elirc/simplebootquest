# CLAUDE.md: Recipe Box

## Commands
- Install: `npm install` (npm workspaces; Node 22)
- DB: `docker compose up -d`, then `npm run db:migrate`
- Dev: `npm run dev` (API :3001 + web :5173, proxied)
- All checks: `npm run typecheck && npm test`
- One API test file: `npm test -w @sbq/api -- recipes`
- One web test: `npm test -w @sbq/web -- RecipeCard`
- New migration: `npm run db:migrate -- --name <snake_case_name>`

## Architecture
- `apps/api/src`: `routes/` (HTTP + Zod validation only) → `services/` (business rules) → Prisma. `app.ts` builds the app; `server.ts` listens.
- `apps/web/src`: `pages/` (one per route), `components/` (shared UI), `api.ts` (the ONLY place that calls fetch).
- `packages/shared`: types shared by API and web. Change a type here and fix both sides.

## Conventions
- Validate every request body with `parse(Schema, req.body)`; throw `HttpError` (never `res.status(...)` in services).
- Every query on user data is scoped by `ownerId`; other users' records return 404.
- Return users only via `toPublicUser()`.
- Tests: Supertest with `registeredAgent()`; each test sets up its own data.
- Prefer small, focused commits; match the existing code style (no new patterns).

## Gotchas
- Prisma client is generated into `apps/api/src/generated` (gitignored): run `npm install` after schema changes.
- API tests need the `recipebox_test` database (created by docker compose).
- Images go to object storage via presigned URLs; never through the API.

## Never
- Commit `.env` files or print secrets.
- Edit `src/generated/` or existing migration files.
- Add dependencies without asking.
- Weaken, skip or delete tests to make them pass.
- Push or force-push; leave commits for review.
