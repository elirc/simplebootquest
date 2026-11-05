---
slug: "js-data-movies-histogram"
title: "Data: Bucket movies by release year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket movies by release year

Group movies into buckets of width `width` by `year`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Winter Kings", year: 2012, minutes: 125, rating: 6.4, genre: "drama"},
  {id: 2, title: "Blue River", year: 2023, minutes: 95, rating: 8.9, genre: "sci-fi"},
  {id: 3, title: "Quiet Storm", year: 2022, minutes: 114, rating: 8.3, genre: "drama"},
  {id: 4, title: "Last Light", year: 1993, minutes: 97, rating: 9.1, genre: "thriller"},
  {id: 5, title: "Paper Moon", year: 2019, minutes: 154, rating: 6.7, genre: "thriller"},
  {id: 6, title: "Cloud Atlas", year: 2010, minutes: 132, rating: 7.6, genre: "sci-fi"},
  {id: 7, title: "Red Harbor", year: 1983, minutes: 146, rating: 9.1, genre: "drama"},
  {id: 8, title: "Glass City", year: 1990, minutes: 112, rating: 6.3, genre: "sci-fi"}
]
```
