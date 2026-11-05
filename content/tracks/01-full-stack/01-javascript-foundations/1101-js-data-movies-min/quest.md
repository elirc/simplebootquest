---
slug: "js-data-movies-min"
title: "Data: The movie with the lowest rating"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The movie with the lowest rating

Return the title of the movie with the **lowest** `rating` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Glass City", year: 2004, minutes: 166, rating: 6.3, genre: "thriller"},
  {id: 2, title: "Quiet Storm", year: 1999, minutes: 148, rating: 4.1, genre: "drama"},
  {id: 3, title: "Night Train", year: 2008, minutes: 136, rating: 9.1, genre: "sci-fi"},
  {id: 4, title: "Cloud Atlas", year: 2005, minutes: 86, rating: 4.6, genre: "comedy"},
  {id: 5, title: "Last Light", year: 2023, minutes: 99, rating: 9.3, genre: "drama"},
  {id: 6, title: "Blue River", year: 1998, minutes: 175, rating: 7.7, genre: "thriller"},
  {id: 7, title: "Silver Fox", year: 2007, minutes: 100, rating: 5.7, genre: "thriller"},
  {id: 8, title: "Iron Garden", year: 1995, minutes: 125, rating: 8.4, genre: "sci-fi"}
]
```
