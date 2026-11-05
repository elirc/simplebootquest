---
slug: "js-data-repos-chain"
title: "Data: Filter, sort, map: repos in one language"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Filter, sort, map: repos in one language

Return the names of repos whose `language` equals `value`, sorted by `openIssues` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "api-gateway", stars: 4189, openIssues: 124, language: "TypeScript", archived: true},
  {id: 2, name: "billing", stars: 605, openIssues: 51, language: "TypeScript", archived: false},
  {id: 3, name: "design-system", stars: 927, openIssues: 97, language: "TypeScript", archived: false},
  {id: 4, name: "infra", stars: 3304, openIssues: 91, language: "TypeScript", archived: false},
  {id: 5, name: "cli", stars: 1532, openIssues: 96, language: "Python", archived: true},
  {id: 6, name: "mobile", stars: 1634, openIssues: 45, language: "Go", archived: false},
  {id: 7, name: "search", stars: 5360, openIssues: 87, language: "Go", archived: false},
  {id: 8, name: "auth-service", stars: 5254, openIssues: 51, language: "Python", archived: true}
]
```
