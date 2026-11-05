---
slug: "ut-first-tests"
title: "Your First Test Suite"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["A 0% and a 100% discount are cheap, powerful tests.", "Pick inputs where rounding down and rounding to the nearest give different answers, e.g. 1000 cents with 33.35% off is 666.5."]
---
# Your First Test Suite

Time to write tests yourself. Below is `applyDiscount(priceCents, percent)`. It's correct, and you can read it in the **Code under test** tab:

- It takes a whole-cent price and a percentage from 0 to 100.
- It returns the discounted price, **rounded to the nearest cent**.
- It never returns less than 0.

Write tests that **pass** against this code, and **fail** against hidden buggy versions. To catch them all, think about:

- an ordinary discount,
- a 0% discount (nothing changes),
- a 100% discount,
- rounding (e.g. 15% off 999 cents is 849.15 → **849**),

```js
test('takes 10% off', () => {
  expect(applyDiscount(5000, 10)).toBe(4500);
});
```

When you click **Check my tests**, you'll see whether your tests pass on the correct code, and which bugs they catch.
