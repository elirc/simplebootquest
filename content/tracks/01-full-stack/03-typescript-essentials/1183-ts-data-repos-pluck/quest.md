---
slug: "ts-data-repos-pluck"
title: "Data: Pick just the fields the UI needs"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Destructure the parameter: `({ id, name }) => ({ id, name })`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Pick just the fields the UI needs

Return a new array of objects with only `id`, `name` and `openIssues` (in that order). APIs should never send more than the client needs.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "api-gateway", stars: 677, openIssues: 52, language: "Python", archived: true},
  {id: 2, name: "billing", stars: 1498, openIssues: 42, language: "Go", archived: false},
  {id: 3, name: "search", stars: 3296, openIssues: 11, language: "Go", archived: false},
  {id: 4, name: "mobile", stars: 3105, openIssues: 41, language: "TypeScript", archived: true},
  {id: 5, name: "infra", stars: 3801, openIssues: 40, language: "Python", archived: true},
  {id: 6, name: "docs", stars: 2527, openIssues: 100, language: "Go", archived: false},
  {id: 7, name: "cli", stars: 3577, openIssues: 95, language: "Go", archived: true},
  {id: 8, name: "design-system", stars: 4054, openIssues: 126, language: "TypeScript", archived: true}
]
```

Type the parameters and the return value. The interface is already written for you.
