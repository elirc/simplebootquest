---
slug: node-http-messages
title: Raw HTTP Messages
type: code
language: js
xp: 25
---
# Raw HTTP Messages

HTTP/1.1 is plain text. Here's a complete request:

```http
POST /api/todos HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 22

{"title":"Learn HTTP"}
```

1. **Request line:** method, path, version.
2. **Headers:** `Name: value` pairs. Names are **case-insensitive**.
3. **A blank line.**
4. **The body** (optional).

Lines end with `\r\n` (CRLF). A response has the same shape, with a **status line** instead:

```http
HTTP/1.1 201 Created
Content-Type: application/json

{"id":1,"title":"Learn HTTP"}
```

Every framework (Express, Fastify, Next.js) is ultimately reading and writing text like this. Parsing it once yourself takes the magic out of frameworks.

## Your task

1. `parseRequest(raw)` returns `{ method, path, version, headers, body }`. Header names should be lowercased, and values trimmed. `body` is everything after the first blank line (`""` if there is none).
2. `formatResponse(status, headers, body)` returns a response string with CRLF line endings. Use the reason phrases from the `STATUS_TEXT` map in the starter, and always add a `Content-Length` header equal to the byte length of the body.

Hint: `new TextEncoder().encode(body).length` gives the byte length, which differs from `.length` for characters like `é`.
