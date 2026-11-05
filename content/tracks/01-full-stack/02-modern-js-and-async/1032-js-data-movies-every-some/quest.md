---
slug: "js-data-movies-every-some"
title: "Data: Are all movies under a rating limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all movies under a rating limit?

Return `true` if **every** movie has `rating` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Night Train", year: 2020, minutes: 156, rating: 8.9, genre: "drama"},
  {id: 2, title: "Cloud Atlas", year: 2013, minutes: 149, rating: 9.3, genre: "sci-fi"},
  {id: 3, title: "Silver Fox", year: 2010, minutes: 98, rating: 7.3, genre: "comedy"},
  {id: 4, title: "Open Road", year: 2010, minutes: 163, rating: 7.1, genre: "drama"},
  {id: 5, title: "Quiet Storm", year: 1994, minutes: 141, rating: 6, genre: "thriller"},
  {id: 6, title: "Iron Garden", year: 2001, minutes: 89, rating: 5, genre: "sci-fi"},
  {id: 7, title: "Winter Kings", year: 2012, minutes: 115, rating: 7.5, genre: "thriller"},
  {id: 8, title: "Last Light", year: 1988, minutes: 160, rating: 7.4, genre: "drama"}
]
```
