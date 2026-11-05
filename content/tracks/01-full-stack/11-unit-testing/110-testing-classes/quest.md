---
slug: "ut-testing-classes"
title: "Testing a Class with beforeEach"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
hints: ["Reserve exactly the available amount: that is a boundary.", "After a failed reserve, check the stock did not change."]
resources: [{"title": "Vitest: Setup and teardown", "url": "https://vitest.dev/api/#setup-and-teardown"}]
---
# Testing a Class with beforeEach

For classes, every test needs a fresh instance, because sharing one between tests makes them order-dependent. `beforeEach` runs before every test in its `describe` block:

```js
describe('Inventory', () => {
  let inv;
  beforeEach(() => {
    inv = new Inventory();
    inv.receive('pen', 10);
  });

  test('...', () => { ... });
});
```

Test the **public behaviour** (method results and errors), not private fields.

`class Inventory`:

- `receive(sku, qty)` adds stock. `qty` must be a positive integer, otherwise it throws a `RangeError`.
- `reserve(sku, qty)` reduces the available stock and returns `true`, or returns `false` (changing nothing) if there isn't enough.
- `available(sku)` returns the current stock (0 for unknown skus).
- `lowStock(threshold)` returns the skus with stock **at or below** the threshold, sorted alphabetically.
