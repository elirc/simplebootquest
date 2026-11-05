---
slug: "js-data-repos-average"
title: "Data: Average open issues"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average open issues

Return the average `openIssues` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "search", stars: 2278, openIssues: 128, language: "Go", archived: true},
  {id: 2, name: "notifier", stars: 4827, openIssues: 14, language: "Go", archived: false},
  {id: 3, name: "auth-service", stars: 4057, openIssues: 63, language: "TypeScript", archived: false},
  {id: 4, name: "analytics", stars: 3905, openIssues: 8, language: "Go", archived: false},
  {id: 5, name: "mobile", stars: 4137, openIssues: 72, language: "Go", archived: true},
  {id: 6, name: "billing", stars: 1103, openIssues: 99, language: "Python", archived: false},
  {id: 7, name: "web-app", stars: 2328, openIssues: 96, language: "TypeScript", archived: false},
  {id: 8, name: "cli", stars: 1602, openIssues: 126, language: "Go", archived: false}
]
```
