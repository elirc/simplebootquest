---
slug: js-fetch-and-errors
title: fetch & Error Handling
type: code
language: js
xp: 25
hints: ["Check `res.ok` before calling `res.json()`.", "Set `this.name` and `this.status` after calling `super(message)`."]
resources: [{"title": "MDN: Using fetch", "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}]
---
# fetch & Error Handling

`fetch` is how browsers (and Node 18+) make HTTP requests:

```js
const res = await fetch('/api/todos', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Learn fetch' }),
});
const data = await res.json();
```

### The #1 fetch gotcha

`fetch` **only rejects on network failure.** A `404` or `500` response *resolves* normally. You must check `res.ok` (true for status 200–299) yourself:

```js
if (!res.ok) {
  throw new Error(`Request failed with ${res.status}`);
}
```

### Custom error classes

Throwing a plain `Error` loses information. A custom class lets callers inspect *what* went wrong:

```js
class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
  }
}

try { ... } catch (err) {
  if (err instanceof HttpError && err.status === 404) showNotFound();
  else throw err; // don't swallow errors you can't handle!
}
```

## Your task

The tests pass in a fake `fetch` function, so your code can be tested without a network. Injecting dependencies like this is a key testing technique.

1. Create a class `HttpError` that extends `Error`, with `name = 'HttpError'` and a `status` property.
2. `getJSON(url, fetchFn)` calls `fetchFn(url)`. If the response is not `ok`, throw an `HttpError` with the status and the message `"Request to <url> failed with <status>"`. Otherwise return the parsed JSON.
3. `safeParseJSON(text)` returns `{ ok: true, value }` for valid JSON or `{ ok: false, error: <message> }` for invalid JSON. It never throws.
