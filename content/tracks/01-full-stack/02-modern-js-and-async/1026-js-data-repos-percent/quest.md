---
slug: "js-data-repos-percent"
title: "Data: What share of repos are archived?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of repos are archived?

Return the percentage (0–100, rounded to a whole number) of repos where `archived` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "analytics", stars: 2065, openIssues: 97, language: "Python", archived: true},
  {id: 2, name: "auth-service", stars: 3195, openIssues: 28, language: "Python", archived: false},
  {id: 3, name: "cli", stars: 643, openIssues: 19, language: "Python", archived: false},
  {id: 4, name: "mobile", stars: 4332, openIssues: 21, language: "Go", archived: true},
  {id: 5, name: "search", stars: 3368, openIssues: 35, language: "Go", archived: false},
  {id: 6, name: "docs", stars: 3659, openIssues: 73, language: "TypeScript", archived: true},
  {id: 7, name: "design-system", stars: 2230, openIssues: 116, language: "Python", archived: true},
  {id: 8, name: "infra", stars: 1450, openIssues: 96, language: "Go", archived: false}
]
```
