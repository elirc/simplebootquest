---
slug: "test-p-close-to"
title: "Practice: Build toBeCloseTo"
type: "code"
language: "js"
xp: 15
hints: ["`Infinity - Infinity` is `NaN`, which is why infinities need their own check."]
resources: [{"title": "Vitest: toBeCloseTo", "url": "https://vitest.dev/api/expect.html#tobecloseto"}]
---
# Practice: Build toBeCloseTo

`0.1 + 0.2 === 0.3` is `false`, so `expect(0.1 + 0.2).toBe(0.3)` fails. `toBeCloseTo(expected, numDigits = 2)` passes when

```
Math.abs(expected - received) < 10 ** -numDigits / 2
```

so with the default of 2 digits, the difference must be under 0.005.

## Your task
1. `isCloseTo(received, expected, numDigits = 2)` implements the rule above. Two infinities of the same sign are close. `NaN` is never close to anything.
2. `closeToMessage(received, expected, numDigits = 2)` returns `null` when close, otherwise:

```
expected 0.30000000000000004 to be close to 0.4 (± 0.005), difference 0.09999999999999998
```
