---
slug: "js-data-hotels-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `stars` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Olive Court", nightlyPrice: 136, stars: 5, city: "Toronto", breakfast: true},
  {id: 2, name: "Riverside Inn", nightlyPrice: 348, stars: 3, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sea Breeze", nightlyPrice: 135, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Northern Star", nightlyPrice: 110, stars: 2, city: "Toronto", breakfast: true},
  {id: 5, name: "Old Mill", nightlyPrice: 148, stars: 2, city: "Toronto", breakfast: true},
  {id: 6, name: "Sky Garden", nightlyPrice: 358, stars: 4, city: "Kyoto", breakfast: false},
  {id: 7, name: "Maple House", nightlyPrice: 196, stars: 3, city: "Lisbon", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 114, stars: 4, city: "Kyoto", breakfast: false}
]
```
