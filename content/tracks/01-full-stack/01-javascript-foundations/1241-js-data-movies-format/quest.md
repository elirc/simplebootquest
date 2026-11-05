---
slug: "js-data-movies-format"
title: "Data: Format movies as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format movies as labels

Return one string per movie: `"<title> (<rating>)"`, e.g. `"Open Road (4.1)"`.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Open Road", year: 2018, minutes: 117, rating: 4.1, genre: "comedy"},
  {id: 2, title: "Blue River", year: 2003, minutes: 91, rating: 6.6, genre: "drama"},
  {id: 3, title: "Iron Garden", year: 1997, minutes: 124, rating: 7, genre: "thriller"},
  {id: 4, title: "Last Light", year: 1992, minutes: 110, rating: 8.5, genre: "thriller"},
  {id: 5, title: "Paper Moon", year: 1987, minutes: 104, rating: 8.8, genre: "thriller"},
  {id: 6, title: "Glass City", year: 2015, minutes: 118, rating: 5.9, genre: "comedy"},
  {id: 7, title: "Winter Kings", year: 2012, minutes: 86, rating: 8.1, genre: "drama"},
  {id: 8, title: "Quiet Storm", year: 1996, minutes: 86, rating: 4.6, genre: "drama"}
]
```
