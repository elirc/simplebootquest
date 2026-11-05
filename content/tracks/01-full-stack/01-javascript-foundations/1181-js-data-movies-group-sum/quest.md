---
slug: "js-data-movies-group-sum"
title: "Data: Total rating per genre"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total rating per genre

Return an object mapping each `genre` to the **sum** of `rating` for movies in it.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Glass City", year: 1984, minutes: 110, rating: 5.6, genre: "thriller"},
  {id: 2, title: "Night Train", year: 2020, minutes: 91, rating: 6.2, genre: "thriller"},
  {id: 3, title: "Quiet Storm", year: 2009, minutes: 105, rating: 5.9, genre: "comedy"},
  {id: 4, title: "Cloud Atlas", year: 1981, minutes: 127, rating: 4.5, genre: "comedy"},
  {id: 5, title: "Red Harbor", year: 1983, minutes: 109, rating: 4.2, genre: "sci-fi"},
  {id: 6, title: "Paper Moon", year: 2000, minutes: 174, rating: 8.1, genre: "sci-fi"},
  {id: 7, title: "Open Road", year: 2024, minutes: 102, rating: 6.7, genre: "comedy"},
  {id: 8, title: "Winter Kings", year: 1988, minutes: 91, rating: 5.9, genre: "sci-fi"}
]
```
