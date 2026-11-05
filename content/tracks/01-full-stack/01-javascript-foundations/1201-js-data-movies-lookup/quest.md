---
slug: "js-data-movies-lookup"
title: "Data: Look up a movie's release year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a movie's release year

Return the `year` of the movie whose title is `title`, or `null` if there isn't one.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Red Harbor", year: 2014, minutes: 144, rating: 7.3, genre: "thriller"},
  {id: 2, title: "Iron Garden", year: 2022, minutes: 85, rating: 9.3, genre: "drama"},
  {id: 3, title: "Last Light", year: 1987, minutes: 84, rating: 6, genre: "drama"},
  {id: 4, title: "Quiet Storm", year: 2019, minutes: 171, rating: 6.2, genre: "thriller"},
  {id: 5, title: "Open Road", year: 1999, minutes: 139, rating: 5.3, genre: "sci-fi"},
  {id: 6, title: "Blue River", year: 2009, minutes: 127, rating: 7.1, genre: "sci-fi"},
  {id: 7, title: "Night Train", year: 1994, minutes: 154, rating: 6.1, genre: "thriller"},
  {id: 8, title: "Paper Moon", year: 2012, minutes: 98, rating: 7.7, genre: "comedy"}
]
```
