---
slug: "js-data-hotels-min"
title: "Data: The hotel with the lowest nightly price"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The hotel with the lowest nightly price

Return the name of the hotel with the **lowest** `nightlyPrice` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Olive Court", nightlyPrice: 313, stars: 2, city: "Lisbon", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 227, stars: 2, city: "Lisbon", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 70, stars: 4, city: "Lisbon", breakfast: true},
  {id: 4, name: "Northern Star", nightlyPrice: 273, stars: 2, city: "Lisbon", breakfast: true},
  {id: 5, name: "Sky Garden", nightlyPrice: 158, stars: 4, city: "Kyoto", breakfast: false},
  {id: 6, name: "The Grand", nightlyPrice: 202, stars: 2, city: "Lisbon", breakfast: false},
  {id: 7, name: "Station Hotel", nightlyPrice: 282, stars: 2, city: "Toronto", breakfast: false},
  {id: 8, name: "Harbour View", nightlyPrice: 70, stars: 3, city: "Kyoto", breakfast: true}
]
```
