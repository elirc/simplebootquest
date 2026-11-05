---
slug: "ts-data-repos-max"
title: "Data: The repo with the highest star count"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The repo with the highest star count

Return the name of the repo with the **highest** `stars`. If several tie, return the first. Return `null` for an empty list.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "auth-service", stars: 1124, openIssues: 106, language: "Python", archived: false},
  {id: 2, name: "docs", stars: 2221, openIssues: 71, language: "Go", archived: true},
  {id: 3, name: "mobile", stars: 2267, openIssues: 45, language: "Python", archived: false},
  {id: 4, name: "design-system", stars: 5295, openIssues: 108, language: "TypeScript", archived: true},
  {id: 5, name: "web-app", stars: 5356, openIssues: 2, language: "TypeScript", archived: false},
  {id: 6, name: "api-gateway", stars: 3673, openIssues: 119, language: "TypeScript", archived: true},
  {id: 7, name: "analytics", stars: 1059, openIssues: 91, language: "Python", archived: true},
  {id: 8, name: "billing", stars: 2557, openIssues: 22, language: "Go", archived: true}
]
```

Type the parameters and the return value. The interface is already written for you.
