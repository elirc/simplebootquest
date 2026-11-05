---
slug: "js-data-books-above"
title: "Data: Books with a publication year above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Books with a publication year above a limit

Return the title of every book whose `year` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `BOOKS` in the tests):

```js
const BOOKS = [
  {id: 1, title: "Siddhartha", pages: 769, year: 1843, genre: "sci-fi", available: true},
  {id: 2, title: "Dune", pages: 548, year: 1979, genre: "tech", available: false},
  {id: 3, title: "Neuromancer", pages: 181, year: 1826, genre: "fiction", available: true},
  {id: 4, title: "Matilda", pages: 631, year: 1837, genre: "tech", available: false},
  {id: 5, title: "Ulysses", pages: 625, year: 2013, genre: "sci-fi", available: true},
  {id: 6, title: "Emma", pages: 354, year: 1862, genre: "fiction", available: true},
  {id: 7, title: "Clean Code", pages: 326, year: 1872, genre: "sci-fi", available: true},
  {id: 8, title: "Rebecca", pages: 684, year: 1867, genre: "classic", available: true}
]
```
