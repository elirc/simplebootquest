---
slug: express-boss-bookmarks-api
title: "Project: Bookmarks API with Express"
type: project
xp: 120
boss: true
requirements:
  - "A TypeScript Express 5 project (`express`, `zod`, `tsx` for development) with `npm run dev` and `npm start` scripts"
  - "Resource: bookmarks `{ id, url, title, tags: string[], createdAt }`, stored in memory for now"
  - "Full CRUD: GET /api/bookmarks, GET /api/bookmarks/:id, POST /api/bookmarks, PATCH /api/bookmarks/:id, DELETE /api/bookmarks/:id with correct status codes"
  - "Request bodies validated with Zod (`url` must be a valid URL, `title` 1–200 chars); invalid input returns 400 with details"
  - "Filtering with `?tag=` and a search with `?q=` that matches the title"
  - "A central error handler and a 404 handler, registered after the routes, using an HttpError class"
  - "Code split into `routes/`, `middleware/` and `app.ts` (creates the app) vs `server.ts` (calls listen) — so the app can be tested without a port"
  - "At least 5 automated tests with Vitest + Supertest"
---
# Project: Bookmarks API with Express

Rebuild the ideas from this chapter using the real tools.

## Setup

```bash
mkdir bookmarks-api && cd bookmarks-api
npm init -y
npm install express zod
npm install -D typescript tsx @types/express @types/node vitest supertest @types/supertest
npx tsc --init
```

## Suggested structure

```
src/
├── app.ts            # export function createApp() — builds the Express app
├── server.ts         # import { createApp } … app.listen(PORT)
├── errors.ts         # HttpError
├── middleware/
│   └── errorHandler.ts
└── routes/
    └── bookmarks.ts  # express.Router()
test/
└── bookmarks.test.ts
```

Separating `createApp()` from `listen()` is a pattern used by professional codebases. Tests can create a fresh app per test and call it with Supertest without opening a port:

```ts
import request from 'supertest';
import { createApp } from '../src/app';

test('creates a bookmark', async () => {
  const res = await request(createApp())
    .post('/api/bookmarks')
    .send({ url: 'https://example.com', title: 'Example' });
  expect(res.status).toBe(201);
});
```

## A Zod schema to start from

```ts
const BookmarkInput = z.object({
  url: z.string().url(),
  title: z.string().trim().min(1).max(200),
  tags: z.array(z.string().trim().min(1)).default([]),
});
const BookmarkPatch = BookmarkInput.partial();
```

Submit the GitHub repository URL when you're done. In Chapter 7 you'll swap the in-memory array for PostgreSQL.
