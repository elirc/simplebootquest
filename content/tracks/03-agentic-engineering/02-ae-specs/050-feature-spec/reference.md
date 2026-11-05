# Spec: Share a recipe via read-only link

## Goal
Let a user share one recipe with friends who don't have an account, so recipes can spread without forcing sign-ups. The owner must be able to revoke a link at any time.

## Context (files & patterns)
- API routes: follow `apps/api/src/routes/recipes.ts` (Zod validation, `HttpError`, `requireAuth`).
- Services: business logic goes in a new `services/shareLinks.ts`, like `services/progress.ts`.
- Schema: `apps/api/prisma/schema.prisma`. Add a migration with `npm run db:migrate -- --name share_links`.
- Tests: Supertest style from `apps/api/test/quests.test.ts`, using `registeredAgent()`.
- UI: a "Share" button on `pages/RecipeDetail.tsx`. Use the existing `Toasts` for feedback.

## Constraints
- Tokens are 32 random bytes (`crypto.randomBytes`), base64url; store only a SHA-256 hash.
- No new dependencies.
- A public page is served at `/s/:token` and needs no auth. It must not expose the owner's email.

## Acceptance criteria
- [ ] `POST /api/recipes/:id/share` → 201 `{ url }` for the owner; 404 for other users' recipes.
- [ ] `GET /api/shared/:token` returns the recipe (title, ingredients, steps, owner display name only).
- [ ] `DELETE /api/recipes/:id/share` revokes it: the old token then returns 404.
- [ ] Unknown or malformed tokens → 404 (not 500), with no timing difference worth exploiting.
- [ ] The database never contains raw tokens (a test asserts this).
- [ ] Tests cover all of the above; `npm test` and `npm run typecheck` pass.

## Out of scope
Expiring links, sharing whole collections, view counts, social previews.

## Execution plan
1. "Read the files listed above and propose the schema and endpoints. Don't code yet." I review it.
2. "Write failing Supertest tests for the acceptance criteria." I check they fail for the right reasons.
3. "Add the migration and service, and make the tests pass without changing them." I review the diff and run the tests.
4. "Add the UI button and the public page." I click through it in the browser, including on mobile width.
5. "Run the typecheck, all tests and the build, and summarise the changes." I do a final diff review, then commit.

## If something is unclear
Ask before implementing anything that changes the data model or exposes data publicly. For styling or naming details, choose the existing convention and mention it in the summary.
