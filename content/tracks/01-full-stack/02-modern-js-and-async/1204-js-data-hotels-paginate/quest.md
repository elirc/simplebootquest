---
slug: "js-data-hotels-paginate"
title: "Data: Paginate hotels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate hotels

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "The Grand", nightlyPrice: 362, stars: 5, city: "Lisbon", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 275, stars: 4, city: "Toronto", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 132, stars: 4, city: "Kyoto", breakfast: false},
  {id: 4, name: "Sea Breeze", nightlyPrice: 297, stars: 2, city: "Lisbon", breakfast: false},
  {id: 5, name: "Harbour View", nightlyPrice: 301, stars: 4, city: "Toronto", breakfast: true},
  {id: 6, name: "Maple House", nightlyPrice: 120, stars: 1, city: "Toronto", breakfast: true},
  {id: 7, name: "Station Hotel", nightlyPrice: 113, stars: 2, city: "Toronto", breakfast: false},
  {id: 8, name: "Riverside Inn", nightlyPrice: 66, stars: 1, city: "Toronto", breakfast: false}
]
```
