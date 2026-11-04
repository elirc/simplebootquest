---
slug: "js-promise-chaining"
title: "Promise Chaining"
type: "code"
language: "js"
xp: 15
hints: ["Return the inner promise from `.then` so the chain waits for it.", "`.catch(() => 0)` turns any rejection into the value 0."]
---
# Promise Chaining

`.then` returns a **new promise**, so calls chain. Whatever you return from a `.then` becomes the next value. If you return a promise, the chain waits for it.

```js
fetchUser(1)
  .then((user) => fetchPosts(user.id))      // returns a promise → chain waits
  .then((posts) => posts.length)
  .catch((err) => 0)                        // catches ANY earlier rejection
  .finally(() => hideSpinner());
```

A `.catch` in the middle **recovers**: the chain continues with whatever it returns.

## Your task

Without using `async`/`await`, using `.then`/`.catch` only:

1. `postCount(userId, api)` fetches the user with `api.getUser(id)`, then `api.getPosts(user.id)`, and resolves to the number of posts.
2. `safePostCount(userId, api)` does the same but resolves to `0` if anything fails.
3. `withFallback(promise, fallbackValue)` resolves to the promise's value, or to `fallbackValue` if it rejects.
