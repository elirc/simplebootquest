---
slug: "js-data-cities-update"
title: "Data: Update cities immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update cities immutably

Return a **new** array where every city with `continent` equal to `value` has `population` increased by `amount`. Other cities are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Cairo", population: 7739, avgTemp: 7, continent: "Africa"},
  {id: 2, name: "Turin", population: 970, avgTemp: 14, continent: "Oceania"},
  {id: 3, name: "Hanoi", population: 7434, avgTemp: 26, continent: "Americas"},
  {id: 4, name: "Lagos", population: 6161, avgTemp: 22, continent: "Europe"},
  {id: 5, name: "Perth", population: 4705, avgTemp: 10, continent: "Americas"},
  {id: 6, name: "Accra", population: 7145, avgTemp: 27, continent: "Americas"},
  {id: 7, name: "Lisbon", population: 2311, avgTemp: 26, continent: "Asia"},
  {id: 8, name: "Seoul", population: 8343, avgTemp: 24, continent: "Asia"}
]
```
