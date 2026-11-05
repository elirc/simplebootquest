---
slug: "js-data-books-top-n"
title: "Data: Top books by page count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top books by page count

Return the titles of the `n` books with the **highest** `pages`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Hamlet", pages: 492, year: 1874, genre: "classic", available: true},
  {id: 2, title: "Ulysses", pages: 438, year: 1823, genre: "tech", available: true},
  {id: 3, title: "Siddhartha", pages: 605, year: 1857, genre: "sci-fi", available: false},
  {id: 4, title: "Dune", pages: 460, year: 1872, genre: "classic", available: true},
  {id: 5, title: "Walden", pages: 160, year: 1958, genre: "tech", available: true},
  {id: 6, title: "Persuasion", pages: 731, year: 1923, genre: "fiction", available: false},
  {id: 7, title: "Clean Code", pages: 312, year: 1949, genre: "sci-fi", available: true},
  {id: 8, title: "Rebecca", pages: 502, year: 1878, genre: "sci-fi", available: false}
]
```
