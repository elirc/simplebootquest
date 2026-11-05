---
slug: "js-data-movies-sort-asc"
title: "Data: Sort movies by runtime"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort movies by runtime

Return the titles sorted by `minutes` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Silver Fox", year: 1999, minutes: 124, rating: 5.3, genre: "comedy"},
  {id: 2, title: "Open Road", year: 2012, minutes: 111, rating: 4.1, genre: "thriller"},
  {id: 3, title: "Red Harbor", year: 2019, minutes: 156, rating: 8.9, genre: "thriller"},
  {id: 4, title: "Winter Kings", year: 1984, minutes: 139, rating: 5.9, genre: "drama"},
  {id: 5, title: "Paper Moon", year: 1997, minutes: 121, rating: 8.3, genre: "drama"},
  {id: 6, title: "Glass City", year: 1999, minutes: 163, rating: 4.1, genre: "thriller"},
  {id: 7, title: "Iron Garden", year: 1997, minutes: 106, rating: 6, genre: "drama"},
  {id: 8, title: "Quiet Storm", year: 2006, minutes: 83, rating: 6.2, genre: "drama"}
]
```
