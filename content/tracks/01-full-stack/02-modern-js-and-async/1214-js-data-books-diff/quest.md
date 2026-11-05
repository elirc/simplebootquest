---
slug: "js-data-books-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's books (same ids), return the ids whose `pages` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, title: "Dune", pages: 663, year: 1954, genre: "tech", available: false},
  {id: 2, title: "Emma", pages: 433, year: 1994, genre: "fiction", available: false},
  {id: 3, title: "Matilda", pages: 212, year: 2004, genre: "tech", available: true},
  {id: 4, title: "Persuasion", pages: 666, year: 1829, genre: "classic", available: false},
  {id: 5, title: "Clean Code", pages: 348, year: 1999, genre: "sci-fi", available: false},
  {id: 6, title: "Ulysses", pages: 330, year: 1974, genre: "classic", available: true},
  {id: 7, title: "Kindred", pages: 560, year: 1927, genre: "sci-fi", available: false},
  {id: 8, title: "Hamlet", pages: 449, year: 1884, genre: "fiction", available: false}
]
```
