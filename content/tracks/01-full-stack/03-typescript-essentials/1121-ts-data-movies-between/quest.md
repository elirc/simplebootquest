---
slug: "ts-data-movies-between"
title: "Data: Movies in a runtime range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Movies in a runtime range

Return the titles of movies whose `minutes` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Paper Moon", year: 1987, minutes: 93, rating: 6.9, genre: "thriller"},
  {id: 2, title: "Glass City", year: 2010, minutes: 107, rating: 7.5, genre: "thriller"},
  {id: 3, title: "Quiet Storm", year: 1985, minutes: 131, rating: 8, genre: "drama"},
  {id: 4, title: "Winter Kings", year: 1989, minutes: 134, rating: 7.9, genre: "sci-fi"},
  {id: 5, title: "Night Train", year: 1982, minutes: 139, rating: 4.3, genre: "comedy"},
  {id: 6, title: "Open Road", year: 2020, minutes: 140, rating: 4.4, genre: "thriller"},
  {id: 7, title: "Red Harbor", year: 1998, minutes: 107, rating: 5.8, genre: "sci-fi"},
  {id: 8, title: "Iron Garden", year: 1996, minutes: 133, rating: 6.3, genre: "thriller"}
]
```

Type the parameters and the return value. The interface is already written for you.
