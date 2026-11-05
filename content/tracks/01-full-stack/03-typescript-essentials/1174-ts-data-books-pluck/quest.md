---
slug: "ts-data-books-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `title` and `year` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Matilda", pages: 769, year: 1872, genre: "classic", available: false},
  {id: 2, title: "Hamlet", pages: 209, year: 1887, genre: "tech", available: false},
  {id: 3, title: "Clean Code", pages: 708, year: 1861, genre: "classic", available: true},
  {id: 4, title: "Siddhartha", pages: 479, year: 2005, genre: "classic", available: false},
  {id: 5, title: "Rebecca", pages: 717, year: 2005, genre: "fiction", available: true},
  {id: 6, title: "Ulysses", pages: 644, year: 1822, genre: "tech", available: false},
  {id: 7, title: "Walden", pages: 543, year: 1881, genre: "classic", available: false},
  {id: 8, title: "Kindred", pages: 606, year: 1998, genre: "sci-fi", available: false}
]
```

Type the parameters and the return value. The interface is already written for you.
