---
slug: "js-data-movies-avg-per"
title: "Data: Average release year per genre"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average release year per genre

Return an object mapping each `genre` to the average `year` of its movies, rounded to a whole number.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Quiet Storm", year: 2018, minutes: 163, rating: 6.4, genre: "thriller"},
  {id: 2, title: "Night Train", year: 1997, minutes: 93, rating: 5.1, genre: "comedy"},
  {id: 3, title: "Red Harbor", year: 2009, minutes: 123, rating: 4.8, genre: "sci-fi"},
  {id: 4, title: "Paper Moon", year: 1989, minutes: 92, rating: 6, genre: "thriller"},
  {id: 5, title: "Blue River", year: 1984, minutes: 87, rating: 6.2, genre: "sci-fi"},
  {id: 6, title: "Iron Garden", year: 1989, minutes: 143, rating: 9.3, genre: "comedy"},
  {id: 7, title: "Silver Fox", year: 2011, minutes: 118, rating: 9.3, genre: "drama"},
  {id: 8, title: "Open Road", year: 2004, minutes: 162, rating: 6.9, genre: "sci-fi"}
]
```
