---
slug: "js-numbers-and-math"
title: "Numbers & Math"
type: "code"
language: "js"
xp: 10
hints: ["Multiply by `10 ** decimals`, round, then divide back.", "`clamp` is just `Math.min(max, Math.max(min, n))`.", "`Number.isInteger` exists!"]
resources: [{"title": "MDN: Math", "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math"}, {"title": "Why 0.1 + 0.2 != 0.3", "url": "https://0.30000000000000004.com/"}]
---
# Numbers & Math

JavaScript has one number type for integers *and* decimals (64-bit floating point).

```js
Math.round(2.5);    // 3
Math.floor(2.9);    // 2   (down)
Math.ceil(2.1);     // 3   (up)
Math.max(1, 5, 3);  // 5
Math.min(...[4, 2]);// 2   (spread an array into arguments)
Math.abs(-7);       // 7
(3.14159).toFixed(2); // '3.14'  ← a STRING
10 % 3;             // 1   remainder
2 ** 10;            // 1024
```

### The floating point gotcha

```js
0.1 + 0.2;          // 0.30000000000000004 😱
```

Computers store decimals in binary, so some values can't be exact. That's why money is stored as **integer cents**.

## Your task

1. `roundTo(n, decimals)` rounds a number to the given number of decimal places and returns a **number** (`roundTo(3.14159, 2)` → `3.14`).
2. `clamp(n, min, max)` keeps `n` inside the range `[min, max]`.
3. `average(numbers)` returns the mean, or `0` for an empty array.
4. `isWhole(n)` returns `true` if `n` is an integer.
