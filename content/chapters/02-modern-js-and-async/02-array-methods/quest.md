---
slug: js-array-methods
title: map, filter & reduce
type: code
language: js
xp: 20
---
# map, filter & reduce

These three methods replace most loops in modern code. They never mutate the original array, which makes them perfect for React state.

```js
const orders = [
  { id: 1, total: 30, status: 'paid' },
  { id: 2, total: 15, status: 'pending' },
  { id: 3, total: 50, status: 'paid' },
];

orders.map((o) => o.id);                     // [1, 2, 3]       transform each item
orders.filter((o) => o.status === 'paid');   // [order1, order3] keep some items
orders.reduce((sum, o) => sum + o.total, 0); // 95              combine into one value
```

They chain nicely:

```js
const paidRevenue = orders
  .filter((o) => o.status === 'paid')
  .reduce((sum, o) => sum + o.total, 0); // 80
```

Other everyday methods: `find` (first match), `some` / `every` (booleans), `findIndex`, `flatMap`, and `toSorted` (a non-mutating sort).

`reduce` can build any shape, not just numbers:

```js
const byStatus = orders.reduce((acc, o) => {
  acc[o.status] = [...(acc[o.status] ?? []), o.id];
  return acc;
}, {});
// { paid: [1, 3], pending: [2] }
```

## Your task

Implement `summarizeOrders(orders)`, which returns:

```js
{
  count: 3,              // number of orders
  revenue: 80,           // sum of totals for PAID orders only
  averagePaid: 40,       // average total of paid orders (0 if none)
  idsByStatus: { paid: [1, 3], pending: [2] },
  biggest: { id: 3, ... } // the order with the largest total (undefined if empty)
}
```

Try to use `filter`, `map` and `reduce` instead of `for` loops.
