---
slug: "js-data-hotels-search"
title: "Data: Search hotels by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search hotels by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 144, stars: 2, city: "Toronto", breakfast: true},
  {id: 2, name: "Old Mill", nightlyPrice: 336, stars: 2, city: "Kyoto", breakfast: true},
  {id: 3, name: "Northern Star", nightlyPrice: 104, stars: 3, city: "Kyoto", breakfast: true},
  {id: 4, name: "Olive Court", nightlyPrice: 48, stars: 1, city: "Toronto", breakfast: true},
  {id: 5, name: "Cityloft", nightlyPrice: 171, stars: 5, city: "Lisbon", breakfast: false},
  {id: 6, name: "Maple House", nightlyPrice: 279, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "Station Hotel", nightlyPrice: 193, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "Pine Lodge", nightlyPrice: 366, stars: 4, city: "Toronto", breakfast: false}
]
```
