---
slug: "js-data-movies-count-cat"
title: "Data: Count movies by genre"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count movies by genre

Return how many movies have `genre` equal to `value`.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Paper Moon", year: 1998, minutes: 148, rating: 7.7, genre: "sci-fi"},
  {id: 2, title: "Winter Kings", year: 2005, minutes: 172, rating: 5.6, genre: "comedy"},
  {id: 3, title: "Last Light", year: 2011, minutes: 114, rating: 4.7, genre: "thriller"},
  {id: 4, title: "Cloud Atlas", year: 2012, minutes: 110, rating: 4.8, genre: "comedy"},
  {id: 5, title: "Blue River", year: 1982, minutes: 154, rating: 4.7, genre: "sci-fi"},
  {id: 6, title: "Quiet Storm", year: 2007, minutes: 169, rating: 8.7, genre: "thriller"},
  {id: 7, title: "Iron Garden", year: 2002, minutes: 164, rating: 5.1, genre: "comedy"},
  {id: 8, title: "Glass City", year: 1990, minutes: 151, rating: 6.8, genre: "comedy"}
]
```
