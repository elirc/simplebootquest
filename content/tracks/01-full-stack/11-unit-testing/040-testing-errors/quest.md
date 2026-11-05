---
slug: "ut-testing-errors"
title: "Testing Errors & Invalid Input"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Check the error type AND the message: two separate assertions.", "The boundaries 1 and 99 should be accepted; 0 and 100 rejected."]
---
# Testing Errors & Invalid Input

The unhappy paths are where real bugs (and security holes) live. For code that throws, assert on **the type of error and its message**, not just "something was thrown":

```js
expect(() => parseQuantity('abc')).toThrow(TypeError);
expect(() => parseQuantity('abc')).toThrow('must be a whole number');
```

⚠️ You must pass a **function** to `expect(...)` for `toThrow`. `expect(parseQuantity('abc')).toThrow()` calls the function *before* `expect` can catch the error, so the test crashes instead.

`parseQuantity(input)` takes a string from a form field:

- It trims whitespace and returns the number for whole numbers from **1 to 99**.
- Anything that isn't a whole number (`''`, `'abc'`, `'2.5'`) throws a `TypeError('Quantity must be a whole number')`.
- Whole numbers outside 1–99 throw a `RangeError('Quantity must be between 1 and 99')`.
