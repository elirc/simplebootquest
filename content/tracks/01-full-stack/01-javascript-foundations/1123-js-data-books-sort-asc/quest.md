---
slug: "js-data-books-sort-asc"
title: "Data: Sort books by publication year"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort books by publication year

Return the titles sorted by `year` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Rebecca", pages: 162, year: 1986, genre: "classic", available: false},
  {id: 2, title: "Ulysses", pages: 172, year: 1879, genre: "tech", available: false},
  {id: 3, title: "Neuromancer", pages: 279, year: 1895, genre: "tech", available: false},
  {id: 4, title: "Siddhartha", pages: 247, year: 1898, genre: "sci-fi", available: true},
  {id: 5, title: "Persuasion", pages: 166, year: 1852, genre: "sci-fi", available: true},
  {id: 6, title: "Clean Code", pages: 568, year: 1974, genre: "sci-fi", available: false},
  {id: 7, title: "Walden", pages: 407, year: 1880, genre: "sci-fi", available: true},
  {id: 8, title: "Matilda", pages: 133, year: 1835, genre: "fiction", available: false}
]
```
