---
slug: "js-data-movies-top-n"
title: "Data: Top movies by rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top movies by rating

Return the titles of the `n` movies with the **highest** `rating`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Glass City", year: 1985, minutes: 86, rating: 7.1, genre: "sci-fi"},
  {id: 2, title: "Iron Garden", year: 2002, minutes: 142, rating: 7.5, genre: "drama"},
  {id: 3, title: "Blue River", year: 2003, minutes: 143, rating: 6.2, genre: "comedy"},
  {id: 4, title: "Winter Kings", year: 2008, minutes: 102, rating: 8.3, genre: "drama"},
  {id: 5, title: "Quiet Storm", year: 2010, minutes: 131, rating: 7.1, genre: "drama"},
  {id: 6, title: "Night Train", year: 1985, minutes: 171, rating: 8.3, genre: "drama"},
  {id: 7, title: "Cloud Atlas", year: 2002, minutes: 153, rating: 7.2, genre: "thriller"},
  {id: 8, title: "Open Road", year: 2012, minutes: 173, rating: 6.8, genre: "sci-fi"}
]
```
