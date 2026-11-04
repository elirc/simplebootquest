---
slug: "js-object-shorthand"
title: "Object Shorthand & Computed Keys"
type: "code"
language: "js"
xp: 10
hints: ["`{ ...obj, [key]: value }` is the idiom.", "A missing flag is `undefined`, and `!undefined` is `true`."]
---
# Object Shorthand & Computed Keys

Modern object literals have three handy shortcuts:

```js
const name = 'Ada';
const age = 36;

const user = { name, age };            // shorthand: same as { name: name, age: age }

const field = 'email';
const update = { [field]: 'a@b.c' };   // computed key: { email: 'a@b.c' }

const api = {
  list() { ... },                      // method shorthand
};
```

Computed keys are perfect for form handlers: `setValues({ ...values, [e.target.name]: e.target.value })`. You'll write exactly that in React.

## Your task

1. `makeUser(name, email)` returns `{ name, email, createdAt: 'now' }`, using shorthand.
2. `setField(obj, key, value)` returns a new object with that key set (use a computed key).
3. `toggleFlag(flags, key)` returns a new object with `flags[key]` flipped.
4. `fromPairs(pairs)` builds an object from `[key, value]` pairs **using a loop and computed keys** (don't use `Object.fromEntries`).
