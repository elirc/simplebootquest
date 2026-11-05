---
slug: "js-data-movies-unique"
title: "Data: Distinct genre values"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Distinct genre values

Return every distinct `genre` that appears, sorted alphabetically.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Red Harbor", year: 2024, minutes: 168, rating: 6.6, genre: "sci-fi"},
  {id: 2, title: "Open Road", year: 2006, minutes: 111, rating: 6.8, genre: "thriller"},
  {id: 3, title: "Glass City", year: 2004, minutes: 132, rating: 5.8, genre: "thriller"},
  {id: 4, title: "Quiet Storm", year: 1997, minutes: 151, rating: 6.5, genre: "sci-fi"},
  {id: 5, title: "Winter Kings", year: 1983, minutes: 120, rating: 5.3, genre: "comedy"},
  {id: 6, title: "Silver Fox", year: 2022, minutes: 163, rating: 8.8, genre: "thriller"},
  {id: 7, title: "Blue River", year: 2009, minutes: 116, rating: 4.9, genre: "thriller"},
  {id: 8, title: "Last Light", year: 1996, minutes: 84, rating: 5.1, genre: "comedy"}
]
```
