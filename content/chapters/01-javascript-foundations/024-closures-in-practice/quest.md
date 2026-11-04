---
slug: "js-closures-in-practice"
title: "Closures in Practice"
type: "code"
language: "js"
xp: 20
hints: ["A `Map` is ideal for a cache: `has`, `get` and `set`.", "Keep `let balance` inside `createBankAccount`, so it can only be reached through the returned methods."]
---
# Closures in Practice

A closure is a function that remembers the variables around it. Two real-world uses:

**`once`**: make sure something only happens one time (initialising a database connection, sending a welcome email):

```js
function once(fn) {
  let called = false;
  let result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}
```

**Memoisation**: cache the results of an expensive pure function:

```js
const cache = new Map();
// if cache.has(key) → return the cached value, otherwise compute + store
```

## Your task

1. `once(fn)` as described above. Later calls return the first result.
2. `memoize(fn)` returns a function that caches results by its **single** argument. The tests count how often `fn` really runs.
3. `createBankAccount(initial)` returns `{ deposit(amount), withdraw(amount), balance() }`. The balance must be private (not a property). `withdraw` throws an `Error` with the message `"Insufficient funds"` if the amount exceeds the balance. Both `deposit` and `withdraw` return the new balance.
