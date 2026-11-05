---
slug: "js-data-books-format"
title: "Data: Format books as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format books as labels

Return one string per book: `"<title> (<pages>)"`, e.g. `"Emma (276)"`.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Emma", pages: 276, year: 1839, genre: "tech", available: false},
  {id: 2, title: "Siddhartha", pages: 554, year: 2004, genre: "tech", available: true},
  {id: 3, title: "Rebecca", pages: 755, year: 1841, genre: "sci-fi", available: true},
  {id: 4, title: "Neuromancer", pages: 556, year: 1842, genre: "sci-fi", available: false},
  {id: 5, title: "Matilda", pages: 585, year: 1946, genre: "tech", available: false},
  {id: 6, title: "Dune", pages: 339, year: 1887, genre: "tech", available: true},
  {id: 7, title: "Hamlet", pages: 271, year: 1961, genre: "tech", available: true},
  {id: 8, title: "Ulysses", pages: 144, year: 1949, genre: "classic", available: false}
]
```
