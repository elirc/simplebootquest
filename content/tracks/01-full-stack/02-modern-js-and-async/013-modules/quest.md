---
slug: "js-modules"
title: "ES Modules: import & export"
type: "code"
language: "js"
xp: 10
hints: ["Use `export const`, `export function` and `export default function`."]
resources: [{"title": "javascript.info: Modules", "url": "https://javascript.info/modules-intro"}]
---
# ES Modules: import & export

Real projects are split into files. Each file is a **module** with its own scope:

```js
// math.js
export const PI = 3.14159;                 // named export
export function area(r) { return PI * r * r; }
export default function circle(r) { ... }  // one default export per file

// app.js
import circle, { area, PI } from './math.js';
import * as math from './math.js';         // namespace import
import { area as circleArea } from './math.js';  // rename
```

**Named exports** are explicit and refactor-friendly (your editor can rename them across files), so most style guides prefer them over default exports.

> In this runner, `export` works, but there are no other files to `import` from. Your exported functions are simply available to the tests.

## Your task

Write a tiny "module" that **exports** `TAX_RATE` (`0.2`), `withTax(amount)` (rounded to 2 decimals), and a **default export** function `formatPrice(amount)` that returns `"$12.00"`-style strings. The tests read your exports through an `exports` object, the way Node's CommonJS interop sees them.
