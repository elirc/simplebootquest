---
slug: "js-nested-objects"
title: "Nested Data & Safe Access"
type: "code"
language: "js"
xp: 20
hints: ["In `get`, loop over `path.split(\".\")` and bail out with the fallback as soon as a step is missing.", "`set` is naturally recursive: set the first key to the result of setting the rest."]
---
# Nested Data & Safe Access

Real data (API responses, configs) is nested:

```js
const order = {
  id: 7,
  customer: { name: 'Ada', address: { city: 'London' } },
  items: [{ sku: 'A1', qty: 2 }],
};
order.customer.address.city;    // 'London'
order.items[0].sku;             // 'A1'
```

Sometimes the path is only known at runtime (a form field name like `"customer.address.city"`). A `get(obj, path)` helper walks the object one key at a time.

## Your task

1. `get(obj, path, fallback)` follows a dot-separated path (`"customer.address.city"`). Array indexes appear as numbers (`"items.0.sku"`). Return `fallback` if any step is missing.
2. `set(obj, path, value)` returns a **new** object with the value set at the path, creating intermediate objects as needed. Don't mutate `obj`.
3. `countKeys(obj)` counts every key at every level of nesting (arrays count as values, not containers).
