---
slug: js-destructuring-and-spread
title: Destructuring & Spread
type: code
language: js
xp: 15
hints: ["Filter out `undefined` overrides with `Object.entries(...).filter(...)`, then `Object.fromEntries`.", "Rest in destructuring: `const { password, ...rest } = user`."]
resources: [{"title": "MDN: Destructuring", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"}]
---
# Destructuring & Spread

Modern JavaScript lets you unpack and copy data concisely. You'll see these patterns in nearly every React component and Express handler.

### Destructuring

```js
const user = { id: 1, name: 'Ada', role: 'admin' };
const { name, role } = user;           // pull out properties
const { name: displayName } = user;    // rename
const { theme = 'light' } = user;      // default when missing

const [first, second] = ['a', 'b', 'c'];
```

Function parameters can be destructured too, which is exactly how React props work:

```js
function Badge({ label, color = 'gray' }) { /* ... */ }
```

### Spread and rest

`...` **spreads** an array or object into a new one, or collects the **rest**:

```js
const base = { theme: 'light', fontSize: 14 };
const settings = { ...base, theme: 'dark' }; // later keys win
// { theme: 'dark', fontSize: 14 }

const { password, ...safeUser } = user; // everything except password
```

Spread makes a **shallow** copy: nested objects are still shared.

## Your task

1. `mergeSettings(defaults, overrides)` returns a new object. Overrides win, but any override that is `undefined` must **not** replace the default.
2. `withoutPassword(user)` returns a copy of the user without the `password` key.
3. `toPair({ key, value })` returns `[key, value]`, using destructuring in the parameter list.
