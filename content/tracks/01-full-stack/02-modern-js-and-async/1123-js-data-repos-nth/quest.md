---
slug: "js-data-repos-nth"
title: "Data: The n-th repo by open issues"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The n-th repo by open issues

Return the name of the repo ranked `n` (1 = highest `openIssues`), or `null` if `n` is out of range.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "design-system", stars: 1118, openIssues: 34, language: "Python", archived: true},
  {id: 2, name: "infra", stars: 513, openIssues: 126, language: "Python", archived: true},
  {id: 3, name: "cli", stars: 3131, openIssues: 101, language: "Go", archived: false},
  {id: 4, name: "docs", stars: 4347, openIssues: 76, language: "Go", archived: false},
  {id: 5, name: "auth-service", stars: 2434, openIssues: 80, language: "Go", archived: true},
  {id: 6, name: "billing", stars: 1490, openIssues: 107, language: "TypeScript", archived: false},
  {id: 7, name: "analytics", stars: 575, openIssues: 39, language: "TypeScript", archived: true},
  {id: 8, name: "mobile", stars: 2501, openIssues: 89, language: "Go", archived: false}
]
```
