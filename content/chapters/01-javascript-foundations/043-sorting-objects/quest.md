---
slug: "js-sorting-objects"
title: "Sorting Records"
type: "code"
language: "js"
xp: 15
hints: ["Copy with `[...products]` before sorting (the input is frozen).", "`Number(true)` is 1 and `Number(false)` is 0, which makes booleans easy to sort."]
---
# Sorting Records

`sort` takes a **comparator** `(a, b) => number`:

- a negative result puts `a` first,
- a positive result puts `b` first,
- `0` keeps their order (sort is *stable* in modern JS).

```js
users.toSorted((a, b) => a.age - b.age);                 // numbers ascending
users.toSorted((a, b) => b.age - a.age);                 // descending
users.toSorted((a, b) => a.name.localeCompare(b.name));  // strings, A→Z
```

To sort by several fields, compare the first one and **fall back** to the next when they're equal:

```js
(a, b) => a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName)
```

`||` works because `0` is falsy!

## Your task

1. `sortByPrice(products)` sorts by price, lowest first.
2. `sortByName(products)` sorts by name A→Z, case-insensitively (use `localeCompare` with `{ sensitivity: 'base' }`).
3. `sortForShop(products)` puts in-stock items first, then sorts by price **descending**, then by name A→Z.

All three must return **new arrays**.
