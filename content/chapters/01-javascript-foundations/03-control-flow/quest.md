---
slug: js-control-flow
title: Control Flow
type: code
language: js
xp: 15
---
# Control Flow

Programs make decisions with `if`/`else`, and repeat work with loops.

```js
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else {
  grade = 'C';
}
```

### Comparisons: always use `===`

`==` converts types before comparing (`'1' == 1` is `true`!). `===` doesn't. Use `===` and `!==` everywhere.

### Truthy and falsy

In a condition, these values count as false: `false`, `0`, `''`, `null`, `undefined`, `NaN`. **Everything else** is truthy, including `'0'`, `[]` and `{}`.

### Loops

```js
for (let i = 1; i <= 3; i++) {
  console.log(i); // 1, 2, 3
}

let n = 10;
while (n > 1) {
  n = n / 2;
}
```

### The ternary operator

For simple either/or values: `const label = isAdmin ? 'Admin' : 'User';`

## Your task

1. `fizzBuzz(n)` returns an **array** of the values from `1` to `n`, where:
   - multiples of 3 become `"Fizz"`
   - multiples of 5 become `"Buzz"`
   - multiples of both become `"FizzBuzz"`
   - every other number stays a number.
2. `letterGrade(score)` returns `"A"` (90+), `"B"` (80–89), `"C"` (70–79), `"D"` (60–69) or `"F"`. If the score is not a number between 0 and 100, return `"Invalid"`.

Tip: use `console.log` to debug. Its output appears below the test results.
