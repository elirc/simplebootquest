---
slug: "js-break-continue"
title: "break & continue"
type: "code"
language: "js"
xp: 10
hints: ["A `Set` remembers what you have already seen.", "Returning from inside a loop also stops it."]
---
# break & continue

- `break` exits the loop immediately.
- `continue` skips the rest of this iteration and moves on to the next.

```js
for (const order of orders) {
  if (order.status === 'cancelled') continue; // skip it
  if (total > LIMIT) break;                   // stop entirely
  total += order.amount;
}
```

`for...of` loops support both. Array methods like `forEach` don't: you can't `break` out of a `forEach`. That's one reason to prefer `for...of` when you need early exits (or `find` / `some`, which stop at the first match).

## Your task

1. `sumUntilNegative(numbers)` sums numbers until the first negative one (which is not included).
2. `sumSkippingNulls(values)` sums every value except `null` and `undefined`, using `continue`.
3. `firstDuplicate(items)` returns the first item that has appeared earlier in the array, or `undefined`. Stop as soon as you find it.
