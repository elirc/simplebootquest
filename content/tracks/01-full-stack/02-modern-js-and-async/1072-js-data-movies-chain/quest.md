---
slug: "js-data-movies-chain"
title: "Data: Filter, sort, map: movies in one genre"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: movies in one genre

Return the titles of movies whose `genre` equals `value`, sorted by `rating` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 2011, minutes: 133, rating: 7.1, genre: "sci-fi"},
  {id: 2, title: "Blue River", year: 2019, minutes: 151, rating: 7.5, genre: "thriller"},
  {id: 3, title: "Iron Garden", year: 2023, minutes: 132, rating: 8.8, genre: "thriller"},
  {id: 4, title: "Quiet Storm", year: 2023, minutes: 161, rating: 4.5, genre: "thriller"},
  {id: 5, title: "Open Road", year: 1994, minutes: 162, rating: 4.5, genre: "drama"},
  {id: 6, title: "Red Harbor", year: 1993, minutes: 155, rating: 7.5, genre: "comedy"},
  {id: 7, title: "Paper Moon", year: 2009, minutes: 130, rating: 6.9, genre: "drama"},
  {id: 8, title: "Silver Fox", year: 1994, minutes: 135, rating: 5.8, genre: "sci-fi"}
]
```
