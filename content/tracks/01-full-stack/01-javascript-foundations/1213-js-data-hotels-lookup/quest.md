---
slug: "js-data-hotels-lookup"
title: "Data: Look up a hotel's star rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a hotel's star rating

Return the `stars` of the hotel whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Maple House", nightlyPrice: 87, stars: 4, city: "Kyoto", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 62, stars: 1, city: "Toronto", breakfast: false},
  {id: 3, name: "Sky Garden", nightlyPrice: 77, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 76, stars: 3, city: "Kyoto", breakfast: true},
  {id: 5, name: "Harbour View", nightlyPrice: 176, stars: 3, city: "Lisbon", breakfast: false},
  {id: 6, name: "Sea Breeze", nightlyPrice: 82, stars: 1, city: "Lisbon", breakfast: false},
  {id: 7, name: "The Grand", nightlyPrice: 233, stars: 2, city: "Lisbon", breakfast: true},
  {id: 8, name: "Olive Court", nightlyPrice: 408, stars: 2, city: "Kyoto", breakfast: true}
]
```
