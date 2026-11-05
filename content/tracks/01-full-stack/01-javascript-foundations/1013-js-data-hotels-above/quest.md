---
slug: "js-data-hotels-above"
title: "Data: Hotels with a star rating above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Hotels with a star rating above a limit

Return the name of every hotel whose `stars` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 195, stars: 4, city: "Toronto", breakfast: false},
  {id: 2, name: "Pine Lodge", nightlyPrice: 174, stars: 4, city: "Kyoto", breakfast: false},
  {id: 3, name: "Harbour View", nightlyPrice: 189, stars: 1, city: "Toronto", breakfast: false},
  {id: 4, name: "Station Hotel", nightlyPrice: 223, stars: 4, city: "Kyoto", breakfast: false},
  {id: 5, name: "Sea Breeze", nightlyPrice: 175, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "Old Mill", nightlyPrice: 83, stars: 1, city: "Toronto", breakfast: false},
  {id: 7, name: "Northern Star", nightlyPrice: 265, stars: 3, city: "Kyoto", breakfast: false},
  {id: 8, name: "Olive Court", nightlyPrice: 192, stars: 4, city: "Kyoto", breakfast: true}
]
```
