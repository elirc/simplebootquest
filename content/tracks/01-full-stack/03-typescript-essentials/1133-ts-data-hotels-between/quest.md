---
slug: "ts-data-hotels-between"
title: "Data: Hotels in a star rating range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Hotels in a star rating range

Return the names of hotels whose `stars` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 228, stars: 5, city: "Kyoto", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 93, stars: 1, city: "Toronto", breakfast: true},
  {id: 3, name: "The Grand", nightlyPrice: 155, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Cityloft", nightlyPrice: 91, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "Pine Lodge", nightlyPrice: 168, stars: 3, city: "Toronto", breakfast: false},
  {id: 6, name: "Sky Garden", nightlyPrice: 50, stars: 5, city: "Toronto", breakfast: false},
  {id: 7, name: "Northern Star", nightlyPrice: 66, stars: 4, city: "Lisbon", breakfast: true},
  {id: 8, name: "Maple House", nightlyPrice: 240, stars: 5, city: "Kyoto", breakfast: false}
]
```

Type the parameters and the return value. The interface is already written for you.
