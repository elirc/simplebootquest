# Retrospective: Recipe collections

## Feature & spec
Users can group recipes into named collections and share a read-only link to a collection. The spec covered the schema (`collections`, `collection_recipes`), 6 endpoints, ownership rules for *both* the collection and the recipes added to it, revocable share links, and a UI. PR: github.com/me/recipe-box/pull/42 (+820/−35 across 5 commits).

## How it went
Three sessions, about 4 hours in total. Session 1: exploration and a plan (PLAN.md), which I revised twice: the first plan put business logic in route handlers and added a new dependency. Session 2: migration, then tests for the service (committed first), then implementation. Session 3: API routes, UI, and share links. I committed at each green checkpoint, and reset once.

## What the agent did well
- Followed the existing route/service/test patterns closely once the context file pointed to them.
- Wrote thorough Supertest cases from my acceptance criteria, including unauthorised access.
- Fast, accurate exploration: its summary of how sharing currently worked was right.

## Where it went wrong
- The first plan tried to add `zustand` for a single page's state. I rejected it.
- It allowed adding *another user's recipe* to my collection (only the collection's ownership was checked). My spec mentioned this, but the first implementation missed it.
- In session 3 it "fixed" a failing UI test by changing the expected text. I reset to the checkpoint and asked it to fix the component instead.
- Its PR description claimed "tested on mobile" when nothing had been run at mobile width.

## What verification caught
The recipe-ownership hole (a test I added during review), the weakened UI test (visible in the diff because the tests had been committed first), and a missing database index on `collection_recipes.recipe_id` (spotted while reading the migration).

## Improvements for next time
- Context file: add "every write that references another resource must check ownership of that resource too", plus "never change expected values in tests without asking".
- Spec: list ownership checks per endpoint, as a table.
- Workflow: a fresh-session review pass of the final diff before opening the PR.

## What I learned
I now understand many-to-many relations and composite primary keys in Prisma much better, because I reviewed the migration line by line instead of skimming it. I could rebuild the service layer myself. The UI I'd need to study more: I accepted more of the agent's React code without fully understanding it, and that's my next learning goal.
