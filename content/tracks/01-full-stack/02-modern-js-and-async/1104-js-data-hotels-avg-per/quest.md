---
slug: "js-data-hotels-avg-per"
title: "Data: Average star rating per city"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average star rating per city

Return an object mapping each `city` to the average `stars` of its hotels, rounded to a whole number.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 68, stars: 3, city: "Kyoto", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 310, stars: 2, city: "Lisbon", breakfast: false},
  {id: 3, name: "Maple House", nightlyPrice: 240, stars: 1, city: "Toronto", breakfast: false},
  {id: 4, name: "Olive Court", nightlyPrice: 127, stars: 4, city: "Toronto", breakfast: false},
  {id: 5, name: "Sea Breeze", nightlyPrice: 209, stars: 5, city: "Lisbon", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 163, stars: 5, city: "Toronto", breakfast: true},
  {id: 7, name: "Old Mill", nightlyPrice: 252, stars: 1, city: "Lisbon", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 115, stars: 5, city: "Lisbon", breakfast: true}
]
```
