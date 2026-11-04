---
slug: crud-boss-full-api
title: "Project: Your App's CRUD API"
type: project
xp: 150
boss: true
requirements:
  - "An Express 5 + TypeScript API on top of the Prisma schema from Chapter 6, backed by PostgreSQL"
  - "Full CRUD endpoints for at least two related resources (e.g. /api/recipes and /api/recipes/:id/ingredients)"
  - "Code organised in layers: routes/handlers → services → Prisma (repositories optional)"
  - "Zod validation for every body and query string; the services enforce your business rules"
  - "List endpoints support pagination (`page`, `pageSize` with metadata), at least one filter, and allow-listed sorting"
  - "Consistent error responses `{ error, details? }` from a central error handler; correct status codes throughout (200/201/204/400/404/409)"
  - "Prisma's unique constraint errors (code P2002) are mapped to 409 Conflict"
  - "Environment variables loaded from `.env` (never committed) with an `.env.example` in the repo"
  - "Integration tests with Vitest + Supertest against a separate test database"
---
# Project: Your App's CRUD API

Build the backend for your capstone app using everything from this chapter. This is the biggest project so far, so take it one resource at a time.

## Suggested order

1. **One resource, end to end.** `GET /api/recipes` returning rows from Postgres. Get the whole pipeline working before adding more.
2. **The rest of CRUD** for that resource, with validation and error handling.
3. **Tests** for what you've built so far. It's much easier now than later.
4. **The second resource** and its relationship to the first.
5. **Pagination, filtering and sorting** on the list endpoints.

## Mapping Prisma errors

```ts
import { Prisma } from '@prisma/client';

if (err instanceof Prisma.PrismaClientKnownRequestError) {
  if (err.code === 'P2002') return res.status(409).json({ error: 'Already exists' });
  if (err.code === 'P2025') return res.status(404).json({ error: 'Not found' });
}
```

## Testing against a real database

Use a second database (`app_test`) and point `DATABASE_URL` at it during tests. Before each test, clean the tables:

```ts
beforeEach(async () => {
  await prisma.ingredient.deleteMany();
  await prisma.recipe.deleteMany();
});
```

Integration tests that hit a real database catch bugs mocks never will: constraint violations, wrong relations, broken migrations.

Submit your repository URL when you're done.
