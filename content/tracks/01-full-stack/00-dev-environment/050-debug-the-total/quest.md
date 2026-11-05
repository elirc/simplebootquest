---
slug: "dev-debug-the-total"
title: "Debug: The Cart Total Is Wrong"
type: "code"
language: "js"
xp: 15
hints: ["The first test is missing exactly one item's worth of money. Which item does the loop skip?", "There are two bugs: one in the loop start, one in the discount boundary (`>` vs `>=`)."]
---
# Debug: The Cart Total Is Wrong

Your first debugging quest. Don't rewrite the code: **debug it**.

1. **Run the tests** and read the failure: which test, and what was expected vs. received?
2. **Form a hypothesis**: what would produce exactly that wrong number?
3. **Check it**: add a `console.log` inside the loop and run again (logs show up under the results).
4. **Fix the one wrong thing**, run the tests, and remove your logs.

`cartTotal(items)` should return the total price in cents: the sum of `priceCents × quantity`, with a 10% discount (rounded to the nearest cent) when the total is **at least** 5000 cents.
