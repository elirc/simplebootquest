---
slug: "ts-data-movies-average"
title: "Data: Average rating"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average rating

Return the average `rating` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Last Light", year: 2016, minutes: 122, rating: 8.8, genre: "comedy"},
  {id: 2, title: "Red Harbor", year: 1988, minutes: 109, rating: 7.1, genre: "thriller"},
  {id: 3, title: "Blue River", year: 2010, minutes: 111, rating: 4.5, genre: "drama"},
  {id: 4, title: "Paper Moon", year: 2016, minutes: 112, rating: 6.9, genre: "comedy"},
  {id: 5, title: "Glass City", year: 2009, minutes: 152, rating: 4.5, genre: "thriller"},
  {id: 6, title: "Cloud Atlas", year: 1988, minutes: 94, rating: 9.3, genre: "sci-fi"},
  {id: 7, title: "Silver Fox", year: 1994, minutes: 105, rating: 5.8, genre: "sci-fi"},
  {id: 8, title: "Open Road", year: 2013, minutes: 165, rating: 8.1, genre: "drama"}
]
```

Type the parameters and the return value. The interface is already written for you.
