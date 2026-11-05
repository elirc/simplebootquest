---
slug: "js-data-cities-paginate"
title: "Data: Paginate cities"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate cities

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Oslo", population: 5093, avgTemp: 23, continent: "Africa"},
  {id: 2, name: "Accra", population: 2487, avgTemp: 28, continent: "Americas"},
  {id: 3, name: "Lagos", population: 3899, avgTemp: 9, continent: "Africa"},
  {id: 4, name: "Seoul", population: 454, avgTemp: 22, continent: "Oceania"},
  {id: 5, name: "Hanoi", population: 9017, avgTemp: 18, continent: "Africa"},
  {id: 6, name: "Turin", population: 8666, avgTemp: 28, continent: "Africa"},
  {id: 7, name: "Quito", population: 6886, avgTemp: 23, continent: "Americas"},
  {id: 8, name: "Lisbon", population: 1939, avgTemp: 21, continent: "Asia"}
]
```
