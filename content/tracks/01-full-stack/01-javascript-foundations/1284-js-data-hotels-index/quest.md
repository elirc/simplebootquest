---
slug: "js-data-hotels-index"
title: "Data: Index hotels by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index hotels by id

Return an object mapping each `id` to the hotel's name, for fast lookups.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 283, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Old Mill", nightlyPrice: 356, stars: 2, city: "Lisbon", breakfast: false},
  {id: 3, name: "Sky Garden", nightlyPrice: 404, stars: 5, city: "Toronto", breakfast: true},
  {id: 4, name: "Cityloft", nightlyPrice: 267, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "Northern Star", nightlyPrice: 101, stars: 3, city: "Toronto", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 274, stars: 4, city: "Toronto", breakfast: true},
  {id: 7, name: "Maple House", nightlyPrice: 79, stars: 4, city: "Toronto", breakfast: false},
  {id: 8, name: "Olive Court", nightlyPrice: 83, stars: 3, city: "Toronto", breakfast: false}
]
```
