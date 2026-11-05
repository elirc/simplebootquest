---
slug: "ts-data-movies-count-cat"
title: "Data: Count movies by genre"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count movies by genre

Return how many movies have `genre` equal to `value`.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Blue River", year: 2001, minutes: 167, rating: 4.3, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 1983, minutes: 106, rating: 9.2, genre: "comedy"},
  {id: 3, title: "Paper Moon", year: 2003, minutes: 91, rating: 7.5, genre: "comedy"},
  {id: 4, title: "Winter Kings", year: 1994, minutes: 142, rating: 4.7, genre: "thriller"},
  {id: 5, title: "Open Road", year: 2019, minutes: 94, rating: 7.5, genre: "comedy"},
  {id: 6, title: "Red Harbor", year: 1987, minutes: 127, rating: 6.5, genre: "thriller"},
  {id: 7, title: "Cloud Atlas", year: 1992, minutes: 137, rating: 7.4, genre: "comedy"},
  {id: 8, title: "Silver Fox", year: 2018, minutes: 169, rating: 4.2, genre: "thriller"}
]
```

Type the parameters and the return value. The interface is already written for you.
