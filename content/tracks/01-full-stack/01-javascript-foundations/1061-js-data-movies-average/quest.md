---
slug: "js-data-movies-average"
title: "Data: Average runtime"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average runtime

Return the average `minutes` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Last Light", year: 2024, minutes: 87, rating: 5.2, genre: "drama"},
  {id: 2, title: "Red Harbor", year: 2004, minutes: 100, rating: 4.8, genre: "sci-fi"},
  {id: 3, title: "Quiet Storm", year: 2023, minutes: 95, rating: 5, genre: "thriller"},
  {id: 4, title: "Open Road", year: 2001, minutes: 149, rating: 4.6, genre: "comedy"},
  {id: 5, title: "Cloud Atlas", year: 1981, minutes: 156, rating: 4.3, genre: "drama"},
  {id: 6, title: "Night Train", year: 2009, minutes: 96, rating: 6.9, genre: "comedy"},
  {id: 7, title: "Glass City", year: 2021, minutes: 145, rating: 4.8, genre: "comedy"},
  {id: 8, title: "Blue River", year: 1981, minutes: 167, rating: 6.5, genre: "thriller"}
]
```
