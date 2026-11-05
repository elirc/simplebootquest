---
slug: "ut-p-coupon"
title: "Practice: Testing Coupon Rules"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice"
---
# Practice: Testing Coupon Rules

`applyCoupon(subtotalCents, coupon)` returns the discount in cents. Coupons look like:

- `{ type: 'percent', value: 20, maxCents: 1000 }`: 20% off, capped at $10 (no cap when `maxCents` is undefined)
- `{ type: 'fixed', value: 500 }`: $5 off, but never more than the subtotal
- Either may have `minSpendCents`: below that, the discount is 0. **At exactly** the minimum, it applies.
- Percentages are rounded **down** to whole cents.
- `null` or an unknown type → 0.

The correct implementation is in the **Code under test** tab. Your tests must pass against it and fail against every hidden buggy version.
