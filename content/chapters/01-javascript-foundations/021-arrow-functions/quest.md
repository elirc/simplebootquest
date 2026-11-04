---
slug: "js-arrow-functions"
title: "Arrow Functions"
type: "code"
language: "js"
xp: 10
hints: ["The starter `double` has braces but no `return`. Remove the braces for an implicit return.", "To return an object literal from an arrow function, wrap it in parentheses: `=> ({ ... })`."]
resources: [{"title": "MDN: Arrow functions", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"}]
---
# Arrow Functions

Arrow functions are the concise syntax you'll see in almost every modern codebase:

```js
const square = (n) => n * n;               // implicit return (no braces)
const add = (a, b) => a + b;
const greet = () => 'hi';                  // no parameters
const toUser = (name) => ({ name });       // returning an object? wrap it in ( )
const log = (msg) => {                     // braces = a block, so you need `return`
  console.log(msg);
  return msg.length;
};
```

Arrow functions are perfect for **callbacks**: `[1, 2, 3].map((n) => n * 2)`.

⚠️ A common bug: `(x) => { x * 2 }` returns `undefined`, because the braces make it a block, not an expression.

## Your task

Write these as **arrow functions** assigned to `const`:

1. `double`: returns `n * 2`.
2. `isEven`: returns whether `n` is even.
3. `makeUser`: takes `(name, age)` and returns `{ name, age, isAdult }`, where `isAdult` is `age >= 18`.
4. `applyTwice`: takes `(fn, value)` and returns `fn(fn(value))`.
