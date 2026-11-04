---
slug: "js-error-tuples"
title: "Error Tuples: [error, data]"
type: "code"
language: "js"
xp: 15
hints: ["`try { return [null, await promise]; } catch (err) { return [err, undefined]; }`", "Nested destructuring: `const [[e1, a], [e2, b]] = await Promise.all([...])`."]
---
# Error Tuples: [error, data]

`try/catch` blocks around every `await` get noisy. A popular pattern (borrowed from Go) wraps a promise so it **never throws** and returns a tuple instead:

```js
const [err, user] = await to(api.getUser(id));
if (err) return showError(err);
render(user);
```

It's especially handy when you want to handle several independent failures differently, without nesting `try` blocks.

## Your task

1. `to(promise)` resolves to `[null, value]` on success or `[error, undefined]` on failure.
2. `loadProfile(api, id)` uses `to` to load the user and their settings **in parallel**, and returns:
   - `{ error: 'User not found' }` if the user request failed,
   - `{ user, settings }` with `settings` falling back to `{ theme: 'light' }` if only the settings request failed.
