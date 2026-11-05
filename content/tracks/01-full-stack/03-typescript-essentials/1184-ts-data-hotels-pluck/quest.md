---
slug: "ts-data-hotels-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `stars` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 94, stars: 2, city: "Toronto", breakfast: false},
  {id: 2, name: "Cityloft", nightlyPrice: 186, stars: 2, city: "Lisbon", breakfast: true},
  {id: 3, name: "The Grand", nightlyPrice: 246, stars: 2, city: "Lisbon", breakfast: true},
  {id: 4, name: "Station Hotel", nightlyPrice: 396, stars: 3, city: "Lisbon", breakfast: false},
  {id: 5, name: "Sea Breeze", nightlyPrice: 189, stars: 4, city: "Toronto", breakfast: false},
  {id: 6, name: "Maple House", nightlyPrice: 59, stars: 3, city: "Lisbon", breakfast: true},
  {id: 7, name: "Pine Lodge", nightlyPrice: 74, stars: 3, city: "Kyoto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 263, stars: 3, city: "Lisbon", breakfast: true}
]
```

Type the parameters and the return value. The interface is already written for you.
