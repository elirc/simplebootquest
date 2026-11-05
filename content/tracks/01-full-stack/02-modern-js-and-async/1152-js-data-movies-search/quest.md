---
slug: "js-data-movies-search"
title: "Data: Search movies by title"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search movies by title

Return the titles that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every title.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Cloud Atlas", year: 2004, minutes: 153, rating: 7.1, genre: "drama"},
  {id: 2, title: "Night Train", year: 1986, minutes: 152, rating: 5.1, genre: "thriller"},
  {id: 3, title: "Blue River", year: 1989, minutes: 133, rating: 7.4, genre: "thriller"},
  {id: 4, title: "Quiet Storm", year: 2014, minutes: 114, rating: 5.4, genre: "comedy"},
  {id: 5, title: "Silver Fox", year: 1991, minutes: 117, rating: 4.5, genre: "drama"},
  {id: 6, title: "Glass City", year: 1981, minutes: 130, rating: 5.6, genre: "thriller"},
  {id: 7, title: "Last Light", year: 2004, minutes: 101, rating: 5, genre: "thriller"},
  {id: 8, title: "Iron Garden", year: 2002, minutes: 86, rating: 6.8, genre: "comedy"}
]
```
