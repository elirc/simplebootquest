---
slug: "test-q-integration-tests"
title: "Quiz: Integration Tests That Pull Their Weight"
type: "quiz"
xp: 15
resources: [{"title": "Prisma: Integration testing", "url": "https://www.prisma.io/docs/orm/prisma-client/testing/integration-testing"}]
questions: [{"prompt": "Why use a separate test database?", "options": ["It is faster", "Tests delete and insert data freely, which must never touch development or production data", "Prisma requires it"], "answer": 1}, {"prompt": "Tests pass alone but fail when run together. Likely cause?", "options": ["The database is too slow", "Shared state: data left by one test affects another, so reset between tests", "Supertest is broken"], "answer": 1}, {"prompt": "What is a good use of an integration test?", "options": ["Checking every rounding edge case of a price formatter", "Checking that POST /api/todos without a session returns 401 and with one returns 201", "Checking Array.sort"], "answer": 1}, {"prompt": "How does Supertest call your app without starting a server on a port?", "options": ["It cannot", "It passes the app (a request handler) to an ephemeral in-process server and makes real HTTP calls to it", "It mocks Express"], "answer": 1}, {"prompt": "How do you run Postgres for integration tests in GitHub Actions?", "options": ["You cannot", "Use a `services: postgres` container in the workflow", "Use SQLite instead and hope it behaves the same"], "answer": 1}]
---
# Quiz: Integration Tests That Pull Their Weight

Unit tests prove the pieces work. **Integration tests** prove they work **together**: route → validation → service → Prisma → a real database.

A solid setup for an Express + Prisma API:
- A **separate test database** (`TEST_DATABASE_URL`), migrated before the run.
- **Clean state per test**: truncate tables in `beforeEach`, or wrap each test in a transaction that's rolled back.
- **Supertest** to call the app in-process: `await request(app).post('/api/todos').send({...})`.
- Test the **contract**: status codes, response shapes, auth (401/403/404), and validation (400). Don't test Prisma itself.
- Run them in CI with a Postgres **service container**.

They're slower than unit tests, so use them for the paths that matter, not every edge case (those belong in unit tests).
