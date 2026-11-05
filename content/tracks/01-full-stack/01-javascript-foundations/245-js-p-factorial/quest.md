---
slug: "js-p-factorial"
title: "Practice: Factorial with Validation"
type: "code"
language: "js"
xp: 15
hints: ["BigInt literals end with `n`: `1n`, `2n`."]
---
## Your task
`factorial(n)` returns `n!` (`5! = 120`, `0! = 1`) using a loop. Throw a `RangeError` for negative numbers or non-integers. For `n > 20` the result exceeds the largest safe integer, so return a **BigInt** instead (`factorial(25)` → `15511210043330985984000000n`).
