---
slug: "js-data-hotels-histogram"
title: "Data: Bucket hotels by nightly price"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket hotels by nightly price

Group hotels into buckets of width `width` by `nightlyPrice`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 277, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 398, stars: 3, city: "Lisbon", breakfast: false},
  {id: 3, name: "Cityloft", nightlyPrice: 375, stars: 4, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 259, stars: 4, city: "Toronto", breakfast: false},
  {id: 5, name: "Pine Lodge", nightlyPrice: 175, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "Riverside Inn", nightlyPrice: 334, stars: 3, city: "Lisbon", breakfast: false},
  {id: 7, name: "Northern Star", nightlyPrice: 293, stars: 3, city: "Lisbon", breakfast: true},
  {id: 8, name: "Olive Court", nightlyPrice: 146, stars: 2, city: "Kyoto", breakfast: true}
]
```
