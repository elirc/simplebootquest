---
slug: "js-data-cities-histogram"
title: "Data: Bucket cities by population (thousands)"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket cities by population (thousands)

Group cities into buckets of width `width` by `population`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Austin", population: 3519, avgTemp: 2, continent: "Oceania"},
  {id: 2, name: "Seoul", population: 1935, avgTemp: 4, continent: "Asia"},
  {id: 3, name: "Cairo", population: 3809, avgTemp: 7, continent: "Africa"},
  {id: 4, name: "Oslo", population: 7201, avgTemp: 27, continent: "Europe"},
  {id: 5, name: "Lisbon", population: 5970, avgTemp: 10, continent: "Americas"},
  {id: 6, name: "Accra", population: 9612, avgTemp: 22, continent: "Americas"},
  {id: 7, name: "Quito", population: 1310, avgTemp: 7, continent: "Europe"},
  {id: 8, name: "Perth", population: 8162, avgTemp: 17, continent: "Oceania"}
]
```
