---
slug: "js-data-repos-sort-asc"
title: "Data: Sort repos by star count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["`[...array].sort(...)` copies first, so the original stays untouched.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Sort repos by star count

Return the names sorted by `stars` from **lowest to highest**. Ties keep their original order. Don't mutate the input array.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "infra", stars: 3047, openIssues: 79, language: "Python", archived: false},
  {id: 2, name: "mobile", stars: 3745, openIssues: 60, language: "TypeScript", archived: false},
  {id: 3, name: "docs", stars: 5049, openIssues: 100, language: "TypeScript", archived: true},
  {id: 4, name: "search", stars: 2240, openIssues: 39, language: "Python", archived: false},
  {id: 5, name: "analytics", stars: 23, openIssues: 65, language: "Python", archived: false},
  {id: 6, name: "auth-service", stars: 2894, openIssues: 81, language: "Go", archived: true},
  {id: 7, name: "notifier", stars: 4618, openIssues: 58, language: "Python", archived: false},
  {id: 8, name: "web-app", stars: 1524, openIssues: 63, language: "TypeScript", archived: false}
]
```
