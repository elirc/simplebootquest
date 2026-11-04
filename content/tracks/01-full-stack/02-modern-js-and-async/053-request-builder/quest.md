---
slug: "js-request-builder"
title: "Building fetch Requests"
type: "code"
language: "js"
xp: 20
hints: ["Build the query string with `URLSearchParams`, then only add `?` if it is non-empty.", "Add headers conditionally with `if` statements."]
---
# Building fetch Requests

A typical frontend API helper adds the same things to every request: a base URL, query parameters, JSON headers, and maybe an auth token.

```js
fetch('https://api.example.com/todos?done=false&page=2', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Authorization: 'Bearer abc' },
  body: JSON.stringify({ title: 'x' }),
});
```

Separating **building** the request (pure, easy to test) from **sending** it (I/O) is a good design habit.

## Your task

`buildRequest(baseUrl, { method = 'GET', path = '/', query = {}, body, token })` returns `{ url, init }`, where:

- `url` = base + path, plus a query string built with `URLSearchParams`, skipping `undefined`/`null` values. No trailing `?` when the query is empty.
- `init.method` = method.
- `init.headers` always includes `Accept: 'application/json'`, adds `Content-Type: 'application/json'` when there's a body, and `Authorization: 'Bearer <token>'` when there's a token.
- `init.body` is the JSON string of `body`, if one is given (no `body` key otherwise).
