---
slug: "js-data-hotels-sum"
title: "Data: Total star rating of all hotels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total star rating of all hotels

Return the sum of `stars` across all hotels. An empty list totals 0.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Maple House", nightlyPrice: 278, stars: 4, city: "Lisbon", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 142, stars: 1, city: "Toronto", breakfast: true},
  {id: 3, name: "Riverside Inn", nightlyPrice: 298, stars: 2, city: "Toronto", breakfast: false},
  {id: 4, name: "Pine Lodge", nightlyPrice: 173, stars: 2, city: "Toronto", breakfast: true},
  {id: 5, name: "Sea Breeze", nightlyPrice: 98, stars: 3, city: "Kyoto", breakfast: false},
  {id: 6, name: "Olive Court", nightlyPrice: 374, stars: 4, city: "Toronto", breakfast: false},
  {id: 7, name: "Harbour View", nightlyPrice: 168, stars: 2, city: "Lisbon", breakfast: true},
  {id: 8, name: "Old Mill", nightlyPrice: 85, stars: 2, city: "Toronto", breakfast: true}
]
```
