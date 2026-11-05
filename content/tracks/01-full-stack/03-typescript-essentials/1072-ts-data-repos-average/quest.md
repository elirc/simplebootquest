---
slug: "ts-data-repos-average"
title: "Data: Average star count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average star count

Return the average `stars` rounded to **one decimal place** (use `Math.round(x * 10) / 10`). Return `null` for an empty list.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "search", stars: 428, openIssues: 58, language: "Go", archived: false},
  {id: 2, name: "docs", stars: 3295, openIssues: 24, language: "TypeScript", archived: true},
  {id: 3, name: "web-app", stars: 4796, openIssues: 90, language: "Go", archived: true},
  {id: 4, name: "mobile", stars: 441, openIssues: 44, language: "Go", archived: false},
  {id: 5, name: "auth-service", stars: 2876, openIssues: 45, language: "Go", archived: false},
  {id: 6, name: "infra", stars: 1921, openIssues: 106, language: "Python", archived: true},
  {id: 7, name: "api-gateway", stars: 2589, openIssues: 136, language: "TypeScript", archived: false},
  {id: 8, name: "analytics", stars: 1993, openIssues: 139, language: "Go", archived: false}
]
```

Type the parameters and the return value. The interface is already written for you.
