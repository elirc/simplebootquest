---
slug: "js-data-books-update"
title: "Data: Update books immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update books immutably

Return a **new** array where every book with `genre` equal to `value` has `pages` increased by `amount`. Other books are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Matilda", pages: 709, year: 1960, genre: "sci-fi", available: false},
  {id: 2, title: "Dune", pages: 464, year: 1881, genre: "tech", available: true},
  {id: 3, title: "Ulysses", pages: 218, year: 1852, genre: "fiction", available: true},
  {id: 4, title: "Neuromancer", pages: 676, year: 1837, genre: "fiction", available: true},
  {id: 5, title: "Walden", pages: 604, year: 1924, genre: "sci-fi", available: true},
  {id: 6, title: "Siddhartha", pages: 454, year: 1840, genre: "fiction", available: true},
  {id: 7, title: "Kindred", pages: 274, year: 1917, genre: "fiction", available: true},
  {id: 8, title: "Clean Code", pages: 289, year: 1949, genre: "classic", available: false}
]
```
