---
slug: js-variables-and-types
title: Variables & Types
type: code
language: js
xp: 10
---
# Variables & Types

JavaScript has three ways to declare a variable:

```js
const name = 'Ada';   // can't be reassigned — use this by default
let count = 0;        // can be reassigned
var old = true;       // legacy — avoid it
```

**Rule of thumb:** reach for `const` first. Switch to `let` only when you truly need to reassign. Fewer moving parts means fewer bugs.

### The primitive types

| Type | Example |
|------|---------|
| `string` | `'hello'`, `` `Hi ${name}` `` |
| `number` | `42`, `3.14`, `NaN` |
| `boolean` | `true`, `false` |
| `undefined` | a variable with no value yet |
| `null` | an intentional "nothing" |
| `bigint`, `symbol` | rare in web apps |

Use `typeof` to inspect a value at runtime: `typeof 42 === 'number'`.

### Template literals

Backticks let you embed expressions directly:

```js
const price = 9.5;
const label = `Total: $${price.toFixed(2)}`; // "Total: $9.50"
```

## Your task

1. Implement `celsiusToFahrenheit(celsius)` using the formula `F = C × 9/5 + 32`.
2. Implement `describeTemperature(celsius)` that returns a string like `"20°C is 68°F"`. Use a template literal and your first function.
