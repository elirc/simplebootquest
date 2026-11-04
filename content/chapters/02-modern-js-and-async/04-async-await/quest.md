---
slug: js-async-await
title: async / await
type: code
language: js
xp: 20
---
# async / await

`async`/`await` is syntax sugar over promises. It lets asynchronous code read top-to-bottom like synchronous code.

```js
async function loadProfile(id) {
  const user = await getUser(id);       // pauses here until resolved
  const posts = await getPosts(user.id);
  return { user, posts };               // an async function always returns a promise
}
```

Errors from awaited promises become regular exceptions, so you can use `try/catch`:

```js
try {
  const data = await loadProfile(1);
} catch (err) {
  console.error('Failed:', err.message);
}
```

### Sequential vs parallel

This is the most common async performance bug:

```js
// 🐢 Sequential — each request waits for the previous one
for (const id of ids) {
  results.push(await getUser(id));
}

// 🚀 Parallel — all requests start immediately
const results = await Promise.all(ids.map((id) => getUser(id)));
```

Use sequential only when each step depends on the previous one, or when you must avoid hammering a server.

## Your task

The tests pass you a fake `fetchUser(id)` that resolves to `{ id, name }` after a short delay.

1. `getUserNames(ids, fetchUser)` fetches all users **in parallel** and resolves to their names, in the same order as `ids`.
2. `firstAvailable(ids, fetchUser)` tries each id **one at a time, in order**, and resolves to the first user that loads. If a fetch rejects, move on to the next id. If all fail, throw `new Error('No users available')`.
