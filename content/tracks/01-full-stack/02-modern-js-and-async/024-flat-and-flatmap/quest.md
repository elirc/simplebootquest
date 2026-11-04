---
slug: "js-flat-and-flatmap"
title: "flat & flatMap"
type: "code"
language: "js"
xp: 15
hints: ["Return `[]` from a `flatMap` callback to skip an element.", "`Array(n).fill(value)` makes an array of n copies."]
---
# flat & flatMap

```js
[[1, 2], [3], []].flat();          // [1, 2, 3]
[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]

// flatMap = map, then flatten one level
orders.flatMap((o) => o.items);    // every item from every order
words.flatMap((w) => w.split(''));  // every character

// flatMap can also filter-and-map in one pass: return [] to drop an element
users.flatMap((u) => (u.email ? [u.email] : []));
```

## Your task

1. `allItems(orders)`: a flat list of every order's `items`.
2. `allTags(posts)`: every tag across all posts, unique, sorted A→Z.
3. `validEmails(users)`: lowercased emails of users that have one, using a single `flatMap`.
4. `expand(rows)`: turns `[{ name: 'pen', qty: 2 }]` into `['pen', 'pen']`.
