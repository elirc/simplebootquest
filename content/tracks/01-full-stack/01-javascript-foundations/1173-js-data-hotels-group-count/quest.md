---
slug: "js-data-hotels-group-count"
title: "Data: How many hotels per city?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many hotels per city?

Return an object mapping each `city` to the number of hotels with it. Only include values that appear.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 190, stars: 2, city: "Toronto", breakfast: true},
  {id: 2, name: "Olive Court", nightlyPrice: 130, stars: 2, city: "Kyoto", breakfast: true},
  {id: 3, name: "Old Mill", nightlyPrice: 134, stars: 1, city: "Kyoto", breakfast: false},
  {id: 4, name: "Maple House", nightlyPrice: 312, stars: 4, city: "Toronto", breakfast: true},
  {id: 5, name: "Cityloft", nightlyPrice: 74, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 128, stars: 4, city: "Toronto", breakfast: false},
  {id: 7, name: "Sea Breeze", nightlyPrice: 313, stars: 1, city: "Lisbon", breakfast: true},
  {id: 8, name: "Sky Garden", nightlyPrice: 306, stars: 5, city: "Lisbon", breakfast: true}
]
```
