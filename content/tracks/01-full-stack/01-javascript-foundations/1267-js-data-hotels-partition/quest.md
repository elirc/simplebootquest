---
slug: "js-data-hotels-partition"
title: "Data: Split hotels by \"breakfast included\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split hotels by "breakfast included"

Return `{ yes, no }`: the names of hotels where `breakfast` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 338, stars: 2, city: "Kyoto", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 184, stars: 5, city: "Toronto", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 362, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Olive Court", nightlyPrice: 239, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Cityloft", nightlyPrice: 307, stars: 4, city: "Lisbon", breakfast: false},
  {id: 6, name: "Harbour View", nightlyPrice: 60, stars: 4, city: "Kyoto", breakfast: false},
  {id: 7, name: "Sky Garden", nightlyPrice: 270, stars: 1, city: "Lisbon", breakfast: true},
  {id: 8, name: "Old Mill", nightlyPrice: 263, stars: 4, city: "Kyoto", breakfast: false}
]
```
