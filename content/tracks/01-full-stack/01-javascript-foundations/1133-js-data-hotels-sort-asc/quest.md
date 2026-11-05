---
slug: "js-data-hotels-sort-asc"
title: "Data: Sort hotels by star rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort hotels by star rating

Return the names sorted by `stars` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 171, stars: 4, city: "Toronto", breakfast: false},
  {id: 2, name: "Harbour View", nightlyPrice: 210, stars: 1, city: "Lisbon", breakfast: true},
  {id: 3, name: "Old Mill", nightlyPrice: 356, stars: 3, city: "Kyoto", breakfast: true},
  {id: 4, name: "Sea Breeze", nightlyPrice: 209, stars: 4, city: "Toronto", breakfast: true},
  {id: 5, name: "Cityloft", nightlyPrice: 90, stars: 5, city: "Kyoto", breakfast: true},
  {id: 6, name: "Pine Lodge", nightlyPrice: 88, stars: 4, city: "Lisbon", breakfast: true},
  {id: 7, name: "The Grand", nightlyPrice: 340, stars: 3, city: "Kyoto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 410, stars: 5, city: "Kyoto", breakfast: false}
]
```
