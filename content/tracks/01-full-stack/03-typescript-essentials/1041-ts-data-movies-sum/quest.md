---
slug: "ts-data-movies-sum"
title: "Data: Total rating of all movies"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total rating of all movies

Return the sum of `rating` across all movies. An empty list totals 0.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Last Light", year: 2005, minutes: 145, rating: 5.1, genre: "sci-fi"},
  {id: 2, title: "Blue River", year: 2020, minutes: 120, rating: 6.3, genre: "thriller"},
  {id: 3, title: "Winter Kings", year: 2022, minutes: 160, rating: 5.6, genre: "sci-fi"},
  {id: 4, title: "Cloud Atlas", year: 2023, minutes: 109, rating: 4.8, genre: "drama"},
  {id: 5, title: "Quiet Storm", year: 2004, minutes: 172, rating: 8.7, genre: "drama"},
  {id: 6, title: "Silver Fox", year: 1998, minutes: 150, rating: 7.6, genre: "comedy"},
  {id: 7, title: "Paper Moon", year: 2020, minutes: 122, rating: 6.9, genre: "drama"},
  {id: 8, title: "Glass City", year: 2008, minutes: 140, rating: 4.6, genre: "drama"}
]
```

Type the parameters and the return value. The interface is already written for you.
