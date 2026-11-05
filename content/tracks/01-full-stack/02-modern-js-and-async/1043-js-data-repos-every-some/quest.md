---
slug: "js-data-repos-every-some"
title: "Data: Are all repos under a star count limit?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all repos under a star count limit?

Return `true` if **every** repo has `stars` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "infra", stars: 2103, openIssues: 73, language: "Go", archived: false},
  {id: 2, name: "auth-service", stars: 1040, openIssues: 25, language: "TypeScript", archived: false},
  {id: 3, name: "docs", stars: 4316, openIssues: 129, language: "Python", archived: false},
  {id: 4, name: "api-gateway", stars: 3777, openIssues: 40, language: "Go", archived: true},
  {id: 5, name: "mobile", stars: 5174, openIssues: 44, language: "TypeScript", archived: false},
  {id: 6, name: "notifier", stars: 5357, openIssues: 74, language: "Go", archived: true},
  {id: 7, name: "cli", stars: 1051, openIssues: 83, language: "Go", archived: false},
  {id: 8, name: "analytics", stars: 1548, openIssues: 82, language: "TypeScript", archived: true}
]
```
