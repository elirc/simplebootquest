---
slug: "js-data-movies-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `year` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Open Road", year: 2006, minutes: 174, rating: 5.5, genre: "thriller"},
  {id: 2, title: "Glass City", year: 1996, minutes: 112, rating: 7.7, genre: "comedy"},
  {id: 3, title: "Quiet Storm", year: 2013, minutes: 90, rating: 9, genre: "drama"},
  {id: 4, title: "Night Train", year: 1987, minutes: 130, rating: 6.7, genre: "thriller"},
  {id: 5, title: "Silver Fox", year: 1984, minutes: 141, rating: 6.4, genre: "comedy"},
  {id: 6, title: "Paper Moon", year: 2023, minutes: 174, rating: 8.6, genre: "drama"},
  {id: 7, title: "Red Harbor", year: 2016, minutes: 88, rating: 6.9, genre: "thriller"},
  {id: 8, title: "Blue River", year: 2011, minutes: 155, rating: 8.4, genre: "comedy"}
]
```
