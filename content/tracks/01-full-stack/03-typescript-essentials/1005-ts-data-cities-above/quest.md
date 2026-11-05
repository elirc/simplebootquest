---
slug: "ts-data-cities-above"
title: "Data: Cities with a population (thousands) above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Cities with a population (thousands) above a limit

Return the name of every city whose `population` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `CITIES` in the tests):

```js
const CITIES = [
  {id: 1, name: "Accra", population: 7664, avgTemp: 23, continent: "Americas"},
  {id: 2, name: "Hanoi", population: 5737, avgTemp: 24, continent: "Oceania"},
  {id: 3, name: "Lisbon", population: 1285, avgTemp: 26, continent: "Africa"},
  {id: 4, name: "Perth", population: 7529, avgTemp: 5, continent: "Europe"},
  {id: 5, name: "Lima", population: 2224, avgTemp: 25, continent: "Europe"},
  {id: 6, name: "Seoul", population: 5595, avgTemp: 9, continent: "Europe"},
  {id: 7, name: "Oslo", population: 9736, avgTemp: 24, continent: "Europe"},
  {id: 8, name: "Quito", population: 1438, avgTemp: 23, continent: "Africa"}
]
```

Type the parameters and the return value. The interface is already written for you.
