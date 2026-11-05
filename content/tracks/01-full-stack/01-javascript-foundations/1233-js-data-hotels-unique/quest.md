---
slug: "js-data-hotels-unique"
title: "Data: Distinct city values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct city values

Return every distinct `city` that appears, sorted alphabetically.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 288, stars: 4, city: "Lisbon", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 405, stars: 2, city: "Kyoto", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 319, stars: 4, city: "Kyoto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 299, stars: 1, city: "Toronto", breakfast: false},
  {id: 5, name: "Cityloft", nightlyPrice: 332, stars: 3, city: "Kyoto", breakfast: true},
  {id: 6, name: "Sky Garden", nightlyPrice: 92, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "The Grand", nightlyPrice: 415, stars: 5, city: "Kyoto", breakfast: true},
  {id: 8, name: "Northern Star", nightlyPrice: 350, stars: 2, city: "Toronto", breakfast: false}
]
```
