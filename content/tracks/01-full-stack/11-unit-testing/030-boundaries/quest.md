---
slug: "ut-boundaries"
title: "Testing Boundaries"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Test 4999, 5000 and 5001.", "Zero and -1 are boundaries too."]
resources: [{"title": "Boundary value analysis", "url": "https://en.wikipedia.org/wiki/Boundary-value_analysis"}]
---
# Testing Boundaries

Bugs cluster at **boundaries**: `<` vs `<=`, the first and last item, zero, the limit itself. Test **on**, **just below** and **just above** every threshold.

`shippingCost(subtotalCents, country)`:

| Rule | Cost |
|------|------|
| Subtotal **5000 or more** (in any country) | free (0) |
| Otherwise, domestic (`'GB'`) | 399 |
| Otherwise, international | 999 |
| A subtotal below 0 | throws a `RangeError` |

For a threshold at 5000, the interesting inputs are **4999, 5000 and 5001**, plus 0 and negative numbers.

Use `expect(() => fn()).toThrow(RangeError)` to test errors.
