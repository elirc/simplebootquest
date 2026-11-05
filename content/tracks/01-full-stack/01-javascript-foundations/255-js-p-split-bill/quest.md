---
slug: "js-p-split-bill"
title: "Practice: Splitting a Bill Fairly"
type: "code"
language: "js"
xp: 15
hints: ["Floor the base share, then hand out the remainder one cent at a time."]
---
# Practice: Splitting a Bill Fairly

Splitting money must never lose or invent a cent. 1000 cents between 3 people is 334 + 333 + 333.

## Your task
`splitBill(totalCents, people, tipPercent = 0)`:

1. Adds the tip, rounded to the nearest cent.
2. Splits the result into `people` whole-cent shares that **sum exactly** to the total.
3. Gives the leftover cents to the first people, one each.

Return the array of shares. Throw a `RangeError` if `people < 1`.
