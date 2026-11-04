---
slug: "js-while-loops"
title: "while Loops"
type: "code"
language: "js"
xp: 15
hints: ["Loop `while (n !== 1)` and count each step.", "`unshift` adds to the front of an array, so the digits come out in the right order."]
---
# while Loops

Use `while` when you don't know in advance how many iterations you need. Keep going **while** a condition holds:

```js
let attempts = 0;
while (!connected && attempts < 5) {
  connected = tryConnect();
  attempts++;
}
```

`do...while` always runs at least once:

```js
do {
  answer = prompt('Continue? (y/n)');
} while (answer !== 'y' && answer !== 'n');
```

⚠️ Make sure something inside the loop eventually makes the condition false. Otherwise the loop runs forever (this runner stops your code after 8 seconds).

## Your task

1. `collatzSteps(n)` counts the steps to reach `1`: if `n` is even, halve it, otherwise do `3n + 1`. (`6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1` is 8 steps.)
2. `doublingsToReach(start, target)` counts how many times you must double `start` until it's **at least** `target` (`0` if it already is).
3. `digitsOf(n)` returns the digits of a non-negative integer as an array, using a `while` loop with `% 10` (`1234` → `[1, 2, 3, 4]`, `0` → `[0]`).
