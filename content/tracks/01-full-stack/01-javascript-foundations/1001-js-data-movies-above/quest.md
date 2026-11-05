---
slug: "js-data-movies-above"
title: "Data: Movies with a release year above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Movies with a release year above a limit

Return the title of every movie whose `year` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Night Train", year: 2001, minutes: 119, rating: 4.4, genre: "drama"},
  {id: 2, title: "Iron Garden", year: 2013, minutes: 116, rating: 4.8, genre: "comedy"},
  {id: 3, title: "Glass City", year: 2004, minutes: 169, rating: 8.2, genre: "drama"},
  {id: 4, title: "Winter Kings", year: 1983, minutes: 146, rating: 7.7, genre: "drama"},
  {id: 5, title: "Red Harbor", year: 2006, minutes: 171, rating: 6.7, genre: "drama"},
  {id: 6, title: "Last Light", year: 2007, minutes: 121, rating: 8.3, genre: "sci-fi"},
  {id: 7, title: "Silver Fox", year: 2002, minutes: 106, rating: 9.1, genre: "comedy"},
  {id: 8, title: "Paper Moon", year: 2017, minutes: 103, rating: 7.9, genre: "drama"}
]
```
