# Playbook: Recipe collections (group recipes into named, shareable collections)

## Phase 1: Explore
Session 1, read-only: "Read schema.prisma, routes/recipes.ts, services/recipes.ts, pages/Recipes.tsx and their tests. Explain how recipes are owned, listed and shared today. List the patterns I should reuse." I check the explanation against my own understanding, and correct anything it got wrong before planning.

## Phase 2: Plan & review
"Propose a plan in PLAN.md: schema, endpoints, UI, tests, and the step order. No code." I review it for: the many-to-many join table with a composite PK, ownership checks on both the collection *and* the recipes added to it, pagination, no new dependencies, and backwards-compatible migrations. I iterate until it's right, then commit PLAN.md.

## Phase 3: Implement (steps & checkpoints)
| Step | Test-first? | Checks before commit |
|------|-------------|---------------------|
| 1. Migration: `collections`, `collection_recipes` | n/a | migrate on the dev DB, `prisma generate`, typecheck |
| 2. Service: create/list/add/remove, with ownership | Yes: unit tests with a fake repo, committed first | tests green, diff shows tests unchanged |
| 3. API routes + Zod | Yes: Supertest incl. 404 for others' collections | all API tests, typecheck |
| 4. UI: list + detail pages | Component tests for empty/loading states | tests, manual click-through at desktop and mobile width |
| 5. Sharing a collection link | Yes | security tests (revocation, no email leak) |
After each row: review `git diff`, commit with a "why" message, and tick the item in PLAN.md.

## Parallel work
Step 4 (UI) can start in a separate worktree once the API contract (shared types) from step 3 is merged. Everything else is sequential, because each step builds on the previous schema.

## State across sessions
PLAN.md (decisions + checklist) and git history. Each new session starts with: "Read PLAN.md and `git log --oneline -10`, then continue with the next unchecked step."

## Stop-and-rethink signals
- Two failed attempts at the same step: stop, reset to the last checkpoint, and go back to exploring the failure.
- The agent wants to modify tests, add a dependency, or touch unrelated files.
- The diff for one step exceeds ~400 lines: the step is too big, so split it.
- I can't explain the change in one sentence.
