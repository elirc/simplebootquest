---
slug: "ts-data-repos-every-some"
title: "Data: Are all repos under a star count limit?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Are all repos under a star count limit?

Return `true` if **every** repo has `stars` below `limit` (and `true` for an empty list, like `Array.prototype.every`).

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "infra", stars: 1820, openIssues: 91, language: "TypeScript", archived: true},
  {id: 2, name: "api-gateway", stars: 437, openIssues: 52, language: "Python", archived: false},
  {id: 3, name: "mobile", stars: 3814, openIssues: 55, language: "Python", archived: true},
  {id: 4, name: "web-app", stars: 2103, openIssues: 21, language: "TypeScript", archived: false},
  {id: 5, name: "cli", stars: 3881, openIssues: 80, language: "TypeScript", archived: true},
  {id: 6, name: "search", stars: 4080, openIssues: 101, language: "Python", archived: true},
  {id: 7, name: "design-system", stars: 787, openIssues: 125, language: "Python", archived: true},
  {id: 8, name: "docs", stars: 4517, openIssues: 59, language: "Python", archived: true}
]
```

Type the parameters and the return value. The interface is already written for you.
