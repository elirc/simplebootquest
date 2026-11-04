---
slug: node-boss-raw-http-server
title: "Project: A JSON API with Zero Dependencies"
type: project
xp: 100
boss: true
requirements:
  - "A new folder with `npm init -y` and `\"type\": \"module\"` in package.json — no dependencies installed"
  - "A server built with `node:http`'s `createServer`, listening on the port from `process.env.PORT` (default 3000)"
  - "GET /notes returns all notes as JSON with status 200"
  - "POST /notes reads the JSON body, validates that `text` is a non-empty string, and returns 201 with the created note `{ id, text, createdAt }`"
  - "GET /notes/:id returns one note, or 404 with `{ \"error\": \"Note not found\" }`"
  - "DELETE /notes/:id returns 204, or 404 if missing"
  - "Invalid JSON bodies return 400; unknown routes return 404; unexpected errors return 500 — the server never crashes"
  - "Every response sets `Content-Type: application/json` (except 204)"
  - "A README with example curl commands for every endpoint"
---
# Project: A JSON API with Zero Dependencies

Build a small notes API using **only Node's built-in modules**. You'll feel exactly the pain that Express removes in the next chapter, and you'll understand what it's doing for you.

## Getting started

```js
import { createServer } from 'node:http';

const notes = [];
let nextId = 1;

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  // route on req.method + url.pathname ...
});

server.listen(process.env.PORT ?? 3000, () => console.log('Listening'));
```

### Reading the body

The request body arrives as a **stream** of chunks:

```js
async function readJson(req) {
  let raw = '';
  for await (const chunk of req) raw += chunk;
  return raw ? JSON.parse(raw) : {};
}
```

### Sending JSON

```js
function send(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}
```

### Testing with curl

```bash
curl -i localhost:3000/notes
curl -i -X POST localhost:3000/notes -H 'Content-Type: application/json' -d '{"text":"hello"}'
curl -i -X DELETE localhost:3000/notes/1
```

## Stretch goals

- Persist notes to a JSON file with `node:fs/promises`, so they survive restarts.
- Add `PATCH /notes/:id`.
- Log every request with method, path, status and duration.

When you're done, push your project to GitHub and submit the repository URL.
