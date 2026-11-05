---
slug: "js-data-movies-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's movies (same ids), return the ids whose `year` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, title: "Cloud Atlas", year: 1994, minutes: 99, rating: 9.4, genre: "drama"},
  {id: 2, title: "Night Train", year: 1999, minutes: 96, rating: 8.6, genre: "drama"},
  {id: 3, title: "Winter Kings", year: 2023, minutes: 93, rating: 6.1, genre: "sci-fi"},
  {id: 4, title: "Iron Garden", year: 1985, minutes: 158, rating: 5.6, genre: "sci-fi"},
  {id: 5, title: "Silver Fox", year: 2008, minutes: 137, rating: 8.8, genre: "comedy"},
  {id: 6, title: "Quiet Storm", year: 1996, minutes: 122, rating: 6.7, genre: "sci-fi"},
  {id: 7, title: "Red Harbor", year: 2013, minutes: 82, rating: 5, genre: "sci-fi"},
  {id: 8, title: "Last Light", year: 1991, minutes: 168, rating: 6.5, genre: "drama"}
]
```
