---
slug: "js-data-cities-format"
title: "Data: Format cities as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format cities as labels

Return one string per city: `"<name> (<avgTemp>)"`, e.g. `"Seoul (15)"`.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Seoul", population: 790, avgTemp: 15, continent: "Europe"},
  {id: 2, name: "Turin", population: 7747, avgTemp: 11, continent: "Europe"},
  {id: 3, name: "Lisbon", population: 929, avgTemp: 15, continent: "Americas"},
  {id: 4, name: "Lagos", population: 9638, avgTemp: 7, continent: "Americas"},
  {id: 5, name: "Accra", population: 4822, avgTemp: 17, continent: "Europe"},
  {id: 6, name: "Hanoi", population: 3451, avgTemp: 24, continent: "Europe"},
  {id: 7, name: "Austin", population: 5711, avgTemp: 26, continent: "Americas"},
  {id: 8, name: "Quito", population: 1429, avgTemp: 24, continent: "Oceania"}
]
```
