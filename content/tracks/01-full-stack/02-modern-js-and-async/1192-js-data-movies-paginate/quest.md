---
slug: "js-data-movies-paginate"
title: "Data: Paginate movies"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate movies

Return `{ items, page, totalPages }` where `items` are the titles on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Open Road", year: 1983, minutes: 162, rating: 6.2, genre: "thriller"},
  {id: 2, title: "Last Light", year: 1988, minutes: 148, rating: 6.9, genre: "comedy"},
  {id: 3, title: "Silver Fox", year: 1982, minutes: 107, rating: 8.2, genre: "sci-fi"},
  {id: 4, title: "Winter Kings", year: 1991, minutes: 140, rating: 8.3, genre: "comedy"},
  {id: 5, title: "Iron Garden", year: 2021, minutes: 133, rating: 7.4, genre: "sci-fi"},
  {id: 6, title: "Night Train", year: 1993, minutes: 107, rating: 5.3, genre: "sci-fi"},
  {id: 7, title: "Red Harbor", year: 1989, minutes: 83, rating: 9.2, genre: "thriller"},
  {id: 8, title: "Paper Moon", year: 1981, minutes: 129, rating: 5.2, genre: "drama"}
]
```
