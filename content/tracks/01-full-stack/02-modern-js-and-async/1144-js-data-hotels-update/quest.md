---
slug: "js-data-hotels-update"
title: "Data: Update hotels immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update hotels immutably

Return a **new** array where every hotel with `city` equal to `value` has `stars` increased by `amount`. Other hotels are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `HOTELS` in the tests):

```js
const HOTELS = [
  {id: 1, name: "Olive Court", nightlyPrice: 308, stars: 3, city: "Toronto", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 128, stars: 4, city: "Lisbon", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 104, stars: 4, city: "Kyoto", breakfast: true},
  {id: 4, name: "Harbour View", nightlyPrice: 72, stars: 5, city: "Lisbon", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 117, stars: 3, city: "Lisbon", breakfast: true},
  {id: 6, name: "Cityloft", nightlyPrice: 216, stars: 4, city: "Lisbon", breakfast: false},
  {id: 7, name: "Station Hotel", nightlyPrice: 270, stars: 4, city: "Lisbon", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 388, stars: 2, city: "Lisbon", breakfast: true}
]
```
