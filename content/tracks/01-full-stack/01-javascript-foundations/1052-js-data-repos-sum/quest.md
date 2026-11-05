---
slug: "js-data-repos-sum"
title: "Data: Total open issues of all repos"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Total open issues of all repos

Return the sum of `openIssues` across all repos. An empty list totals 0.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "web-app", stars: 278, openIssues: 26, language: "TypeScript", archived: true},
  {id: 2, name: "infra", stars: 1759, openIssues: 64, language: "Python", archived: true},
  {id: 3, name: "auth-service", stars: 5237, openIssues: 1, language: "Python", archived: true},
  {id: 4, name: "billing", stars: 236, openIssues: 49, language: "TypeScript", archived: true},
  {id: 5, name: "search", stars: 89, openIssues: 13, language: "Go", archived: false},
  {id: 6, name: "design-system", stars: 338, openIssues: 5, language: "Python", archived: true},
  {id: 7, name: "api-gateway", stars: 883, openIssues: 3, language: "TypeScript", archived: true},
  {id: 8, name: "analytics", stars: 3846, openIssues: 83, language: "Go", archived: false}
]
```
