---
slug: "js-data-hotels-top-n"
title: "Data: Top hotels by star rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top hotels by star rating

Return the names of the `n` hotels with the **highest** `stars`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Riverside Inn", nightlyPrice: 287, stars: 4, city: "Toronto", breakfast: false},
  {id: 2, name: "Olive Court", nightlyPrice: 289, stars: 1, city: "Toronto", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 133, stars: 2, city: "Toronto", breakfast: false},
  {id: 4, name: "Sea Breeze", nightlyPrice: 297, stars: 3, city: "Kyoto", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 164, stars: 5, city: "Lisbon", breakfast: false},
  {id: 6, name: "Sky Garden", nightlyPrice: 284, stars: 2, city: "Lisbon", breakfast: true},
  {id: 7, name: "Cityloft", nightlyPrice: 78, stars: 2, city: "Toronto", breakfast: true},
  {id: 8, name: "Northern Star", nightlyPrice: 247, stars: 4, city: "Toronto", breakfast: true}
]
```
