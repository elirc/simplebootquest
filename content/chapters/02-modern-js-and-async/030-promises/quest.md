---
slug: js-promises
title: Promises
type: code
language: js
xp: 20
hints: ["`new Promise((resolve) => setTimeout(() => resolve(value), ms))`.", "`Promise.race` with a promise that rejects after `ms`.", "`Promise.allSettled` never rejects. Map its results to your shape."]
resources: [{"title": "javascript.info: Promises", "url": "https://javascript.info/promise-basics"}]
---
# Promises

A **promise** is a placeholder for a value that isn't ready yet: an HTTP response, a database row, a timer. It is always in one of three states: *pending*, *fulfilled* (has a value) or *rejected* (has an error).

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done!'), 100);
});

p.then((value) => console.log(value))  // 'done!'
 .catch((err) => console.error(err));
```

### Wrapping callback APIs

Older APIs take callbacks. Wrapping them in a promise is a classic task:

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

### Racing promises

`Promise.race([a, b])` settles as soon as the **first** promise settles. It's how you build timeouts:

```js
Promise.race([fetchData(), rejectAfter(5000)]);
```

### Combining promises

- `Promise.all([...])` waits for every promise. It rejects as soon as **any** of them rejects.
- `Promise.allSettled([...])` waits for every promise and never rejects. You get `{ status, value | reason }` for each one.

## Your task

1. `delay(ms, value)` returns a promise that resolves to `value` after `ms` milliseconds.
2. `withTimeout(promise, ms)` resolves or rejects like `promise`, but rejects with `new Error('Timed out')` if it takes longer than `ms`.
3. `settleAll(promises)` resolves to an array of `{ ok: true, value }` or `{ ok: false, error }` objects (where `error` is the rejection reason), in the original order. It must never reject.
