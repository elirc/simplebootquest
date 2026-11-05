---
slug: "js-data-movies-nth"
title: "Data: The n-th movie by runtime"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th movie by runtime

Return the title of the movie ranked `n` (1 = highest `minutes`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 1987, minutes: 104, rating: 6.3, genre: "sci-fi"},
  {id: 2, title: "Last Light", year: 2011, minutes: 171, rating: 6.6, genre: "drama"},
  {id: 3, title: "Winter Kings", year: 1995, minutes: 107, rating: 6.8, genre: "comedy"},
  {id: 4, title: "Glass City", year: 1998, minutes: 137, rating: 5.7, genre: "thriller"},
  {id: 5, title: "Open Road", year: 2017, minutes: 157, rating: 5.8, genre: "comedy"},
  {id: 6, title: "Red Harbor", year: 2023, minutes: 161, rating: 8.1, genre: "sci-fi"},
  {id: 7, title: "Night Train", year: 1986, minutes: 165, rating: 7.6, genre: "thriller"},
  {id: 8, title: "Blue River", year: 2009, minutes: 125, rating: 7.6, genre: "comedy"}
]
```
