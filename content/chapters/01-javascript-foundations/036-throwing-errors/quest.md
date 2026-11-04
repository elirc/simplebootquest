---
slug: "js-throwing-errors"
title: "Throwing & Catching Errors"
type: "code"
language: "js"
xp: 15
hints: ["`throw new TypeError(\"...\")` creates a specific error type.", "`try { return fn(); } finally { log(\"done\"); }` returns the value *and* runs the cleanup."]
resources: [{"title": "javascript.info: Error handling", "url": "https://javascript.info/try-catch"}]
---
# Throwing & Catching Errors

When a function can't do its job, **throw** an error rather than returning something misleading:

```js
function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}
```

Callers decide what to do with it:

```js
try {
  const ratio = divide(x, y);
} catch (err) {
  console.error(err.message);
} finally {
  cleanUp(); // always runs
}
```

Built-in error types tell you the *kind* of problem: `TypeError` (wrong type), `RangeError` (value out of range), `SyntaxError` (e.g. bad JSON).

**Don't swallow errors.** An empty `catch {}` hides bugs. Catch only what you can handle, and rethrow the rest.

## Your task

1. `parseAge(input)` returns the age as a number. It throws a `TypeError("Age must be a number")` if `Number(input)` is `NaN`, and a `RangeError("Age must be between 0 and 150")` if it's out of range.
2. `safeDivide(a, b)` returns `{ ok: true, value }` or `{ ok: false, error: <message> }`. It calls a `divide` function (which you also write) inside `try/catch`.
3. `withCleanup(fn, log)` calls `fn()`, and **always** calls `log('done')` afterwards, even if `fn` throws. It returns `fn`'s result, and errors still propagate.
