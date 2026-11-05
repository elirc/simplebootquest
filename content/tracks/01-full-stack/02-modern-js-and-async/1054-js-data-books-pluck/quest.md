---
slug: "js-data-books-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `pages` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Emma", pages: 587, year: 2014, genre: "tech", available: true},
  {id: 2, title: "Kindred", pages: 178, year: 1986, genre: "tech", available: true},
  {id: 3, title: "Clean Code", pages: 687, year: 1876, genre: "classic", available: false},
  {id: 4, title: "Hamlet", pages: 214, year: 2000, genre: "fiction", available: false},
  {id: 5, title: "Matilda", pages: 661, year: 1909, genre: "sci-fi", available: false},
  {id: 6, title: "Dune", pages: 264, year: 1888, genre: "fiction", available: true},
  {id: 7, title: "Ulysses", pages: 670, year: 1928, genre: "classic", available: false},
  {id: 8, title: "Walden", pages: 205, year: 1925, genre: "fiction", available: false}
]
```
