---
slug: "js-destructuring-loops"
title: "Destructuring in Loops & Params"
type: "code"
language: "js"
xp: 15
hints: ["`items.entries()` yields `[index, value]` pairs.", "Put the defaults in the destructuring pattern, and add `= {}` for the no-argument case."]
---
# Destructuring in Loops & Parameters

Destructuring shines when you iterate:

```js
for (const { id, title } of todos) { ... }
for (const [key, value] of Object.entries(obj)) { ... }
for (const [i, item] of items.entries()) { ... }        // index + value
users.map(({ name, email }) => `${name} <${email}>`);
```

And for "options object" parameters, which are much clearer than five positional arguments:

```js
function createServer({ port = 3000, host = 'localhost', logger = console } = {}) { ... }
createServer({ port: 8080 });
```

The `= {}` at the end means calling `createServer()` with no arguments still works.

## Your task

1. `contactList(users)` returns `"Name <email>"` strings, using destructuring in the callback.
2. `numbered(items)` returns `"1. first"`, `"2. second"`… using `items.entries()` and `for...of`.
3. `buildUrl({ host = 'localhost', port = 3000, path = '/', secure = false } = {})` returns e.g. `"http://localhost:3000/"` (use `https` when `secure` is true).
