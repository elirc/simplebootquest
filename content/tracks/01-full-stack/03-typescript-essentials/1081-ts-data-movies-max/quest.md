---
slug: "ts-data-movies-max"
title: "Data: The movie with the highest rating"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The movie with the highest rating

Return the title of the movie with the **highest** `rating`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Red Harbor", year: 2002, minutes: 152, rating: 4.2, genre: "drama"},
  {id: 2, title: "Quiet Storm", year: 2019, minutes: 145, rating: 7.3, genre: "comedy"},
  {id: 3, title: "Night Train", year: 1981, minutes: 155, rating: 4.9, genre: "thriller"},
  {id: 4, title: "Iron Garden", year: 1990, minutes: 130, rating: 9.4, genre: "sci-fi"},
  {id: 5, title: "Last Light", year: 2013, minutes: 92, rating: 6.5, genre: "comedy"},
  {id: 6, title: "Glass City", year: 2000, minutes: 162, rating: 9.1, genre: "thriller"},
  {id: 7, title: "Blue River", year: 1997, minutes: 110, rating: 4.2, genre: "comedy"},
  {id: 8, title: "Paper Moon", year: 2006, minutes: 96, rating: 4.6, genre: "sci-fi"}
]
```

Type the parameters and the return value. The interface is already written for you.
