---
slug: "ts-data-movies-every-some"
title: "Data: Are all movies under a rating limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all movies under a rating limit?

Return `true` if **every** movie has `rating` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Silver Fox", year: 2015, minutes: 111, rating: 7, genre: "drama"},
  {id: 2, title: "Blue River", year: 2014, minutes: 146, rating: 6.8, genre: "sci-fi"},
  {id: 3, title: "Iron Garden", year: 2009, minutes: 173, rating: 7.2, genre: "thriller"},
  {id: 4, title: "Night Train", year: 2018, minutes: 164, rating: 4.4, genre: "comedy"},
  {id: 5, title: "Quiet Storm", year: 1985, minutes: 167, rating: 8.6, genre: "drama"},
  {id: 6, title: "Open Road", year: 2008, minutes: 149, rating: 7.3, genre: "sci-fi"},
  {id: 7, title: "Glass City", year: 1993, minutes: 99, rating: 4.4, genre: "drama"},
  {id: 8, title: "Cloud Atlas", year: 1984, minutes: 173, rating: 4.9, genre: "sci-fi"}
]
```

Type the parameters and the return value. The interface is already written for you.
