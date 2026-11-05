---
slug: "js-data-movies-update"
title: "Data: Update movies immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update movies immutably

Return a **new** array where every movie with `genre` equal to `value` has `year` increased by `amount`. Other movies are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `MOVIES` in the tests):

```js
const MOVIES = [
  {id: 1, title: "Winter Kings", year: 2009, minutes: 151, rating: 7.7, genre: "thriller"},
  {id: 2, title: "Red Harbor", year: 2014, minutes: 93, rating: 7.4, genre: "sci-fi"},
  {id: 3, title: "Glass City", year: 1996, minutes: 167, rating: 4.3, genre: "sci-fi"},
  {id: 4, title: "Quiet Storm", year: 2009, minutes: 119, rating: 4.6, genre: "thriller"},
  {id: 5, title: "Paper Moon", year: 2003, minutes: 165, rating: 8.4, genre: "thriller"},
  {id: 6, title: "Silver Fox", year: 1986, minutes: 151, rating: 7.9, genre: "drama"},
  {id: 7, title: "Blue River", year: 2012, minutes: 160, rating: 7.8, genre: "comedy"},
  {id: 8, title: "Night Train", year: 2020, minutes: 120, rating: 4.3, genre: "thriller"}
]
```
