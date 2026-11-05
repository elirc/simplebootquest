---
slug: "ts-data-repos-sum"
title: "Data: Total open issues of all repos"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total open issues of all repos

Return the sum of `openIssues` across all repos. An empty list totals 0.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "mobile", stars: 3377, openIssues: 82, language: "Python", archived: false},
  {id: 2, name: "api-gateway", stars: 2082, openIssues: 127, language: "TypeScript", archived: false},
  {id: 3, name: "analytics", stars: 702, openIssues: 33, language: "TypeScript", archived: true},
  {id: 4, name: "infra", stars: 2345, openIssues: 18, language: "TypeScript", archived: false},
  {id: 5, name: "search", stars: 3368, openIssues: 127, language: "Python", archived: true},
  {id: 6, name: "auth-service", stars: 1452, openIssues: 14, language: "Go", archived: true},
  {id: 7, name: "cli", stars: 4976, openIssues: 17, language: "Go", archived: false},
  {id: 8, name: "design-system", stars: 1958, openIssues: 127, language: "Python", archived: false}
]
```

Type the parameters and the return value. The interface is already written for you.
