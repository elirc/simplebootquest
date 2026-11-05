---
slug: "js-data-movies-max"
title: "Data: The movie with the highest release year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The movie with the highest release year

Return the title of the movie with the **highest** `year`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Silver Fox", year: 2000, minutes: 100, rating: 8.2, genre: "thriller"},
  {id: 2, title: "Cloud Atlas", year: 2013, minutes: 155, rating: 6, genre: "thriller"},
  {id: 3, title: "Glass City", year: 1993, minutes: 117, rating: 5.8, genre: "drama"},
  {id: 4, title: "Open Road", year: 1997, minutes: 142, rating: 6.2, genre: "thriller"},
  {id: 5, title: "Iron Garden", year: 1989, minutes: 115, rating: 4.8, genre: "comedy"},
  {id: 6, title: "Winter Kings", year: 2023, minutes: 98, rating: 7.7, genre: "thriller"},
  {id: 7, title: "Blue River", year: 1990, minutes: 132, rating: 7, genre: "thriller"},
  {id: 8, title: "Night Train", year: 2020, minutes: 91, rating: 9.2, genre: "sci-fi"}
]
```
