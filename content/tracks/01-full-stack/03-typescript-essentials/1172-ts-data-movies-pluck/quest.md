---
slug: "ts-data-movies-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `minutes` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Open Road", year: 2004, minutes: 119, rating: 5.1, genre: "thriller"},
  {id: 2, title: "Glass City", year: 2001, minutes: 115, rating: 5.8, genre: "sci-fi"},
  {id: 3, title: "Night Train", year: 2019, minutes: 116, rating: 7.9, genre: "drama"},
  {id: 4, title: "Iron Garden", year: 1988, minutes: 89, rating: 6.8, genre: "sci-fi"},
  {id: 5, title: "Paper Moon", year: 1994, minutes: 120, rating: 5.7, genre: "drama"},
  {id: 6, title: "Winter Kings", year: 1997, minutes: 88, rating: 9.2, genre: "drama"},
  {id: 7, title: "Cloud Atlas", year: 2005, minutes: 85, rating: 8.5, genre: "sci-fi"},
  {id: 8, title: "Quiet Storm", year: 1993, minutes: 144, rating: 4.5, genre: "drama"}
]
```

Type the parameters and the return value. The interface is already written for you.
