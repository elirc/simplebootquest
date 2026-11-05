---
slug: "js-data-repos-index"
title: "Data: Index repos by id"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Index repos by id

Return an object mapping each `id` to the repo's name, for fast lookups.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "search", stars: 1622, openIssues: 54, language: "Go", archived: true},
  {id: 2, name: "docs", stars: 312, openIssues: 11, language: "Go", archived: true},
  {id: 3, name: "infra", stars: 984, openIssues: 8, language: "TypeScript", archived: true},
  {id: 4, name: "auth-service", stars: 4814, openIssues: 19, language: "TypeScript", archived: true},
  {id: 5, name: "api-gateway", stars: 887, openIssues: 136, language: "Python", archived: false},
  {id: 6, name: "notifier", stars: 5051, openIssues: 117, language: "Python", archived: false},
  {id: 7, name: "mobile", stars: 702, openIssues: 95, language: "Python", archived: true},
  {id: 8, name: "design-system", stars: 1905, openIssues: 101, language: "Python", archived: false}
]
```
