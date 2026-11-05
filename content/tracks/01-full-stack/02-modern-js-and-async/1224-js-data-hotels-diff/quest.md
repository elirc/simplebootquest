---
slug: "js-data-hotels-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's hotels (same ids), return the ids whose `nightlyPrice` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "Maple House", nightlyPrice: 320, stars: 2, city: "Lisbon", breakfast: true},
  {id: 2, name: "Northern Star", nightlyPrice: 399, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 189, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Olive Court", nightlyPrice: 136, stars: 2, city: "Kyoto", breakfast: true},
  {id: 5, name: "Harbour View", nightlyPrice: 365, stars: 2, city: "Toronto", breakfast: true},
  {id: 6, name: "Old Mill", nightlyPrice: 176, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Cityloft", nightlyPrice: 292, stars: 3, city: "Toronto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 317, stars: 2, city: "Lisbon", breakfast: false}
]
```
