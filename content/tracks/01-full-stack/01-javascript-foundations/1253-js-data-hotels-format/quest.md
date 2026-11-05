---
slug: "js-data-hotels-format"
title: "Data: Format hotels as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format hotels as labels

Return one string per hotel: `"<name> (<stars>)"`, e.g. `"Sea Breeze (5)"`.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 308, stars: 5, city: "Lisbon", breakfast: false},
  {id: 2, name: "Olive Court", nightlyPrice: 405, stars: 1, city: "Kyoto", breakfast: false},
  {id: 3, name: "Northern Star", nightlyPrice: 107, stars: 5, city: "Kyoto", breakfast: false},
  {id: 4, name: "Cityloft", nightlyPrice: 250, stars: 5, city: "Lisbon", breakfast: false},
  {id: 5, name: "Station Hotel", nightlyPrice: 258, stars: 3, city: "Lisbon", breakfast: true},
  {id: 6, name: "Old Mill", nightlyPrice: 383, stars: 1, city: "Toronto", breakfast: true},
  {id: 7, name: "Sky Garden", nightlyPrice: 368, stars: 5, city: "Lisbon", breakfast: true},
  {id: 8, name: "Maple House", nightlyPrice: 129, stars: 2, city: "Lisbon", breakfast: false}
]
```
