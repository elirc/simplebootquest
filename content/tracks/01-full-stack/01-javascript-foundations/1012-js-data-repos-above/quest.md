---
slug: "js-data-repos-above"
title: "Data: Repos with a star count above a limit"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Repos with a star count above a limit

Return the name of every repo whose `stars` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "docs", stars: 2442, openIssues: 42, language: "Go", archived: false},
  {id: 2, name: "infra", stars: 4259, openIssues: 128, language: "Python", archived: true},
  {id: 3, name: "design-system", stars: 1850, openIssues: 99, language: "Python", archived: true},
  {id: 4, name: "search", stars: 2051, openIssues: 109, language: "TypeScript", archived: false},
  {id: 5, name: "api-gateway", stars: 2200, openIssues: 39, language: "TypeScript", archived: true},
  {id: 6, name: "billing", stars: 4971, openIssues: 16, language: "TypeScript", archived: false},
  {id: 7, name: "cli", stars: 4448, openIssues: 62, language: "Python", archived: true},
  {id: 8, name: "notifier", stars: 653, openIssues: 65, language: "Go", archived: false}
]
```
