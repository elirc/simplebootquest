---
slug: "ts-data-repos-percent"
title: "Data: What share of repos are archived?"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What share of repos are archived?

Return the percentage (0–100, rounded to a whole number) of repos where `archived` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "notifier", stars: 5151, openIssues: 129, language: "Python", archived: false},
  {id: 2, name: "infra", stars: 3778, openIssues: 132, language: "Go", archived: false},
  {id: 3, name: "design-system", stars: 4235, openIssues: 63, language: "Go", archived: true},
  {id: 4, name: "web-app", stars: 1285, openIssues: 81, language: "Go", archived: false},
  {id: 5, name: "auth-service", stars: 4965, openIssues: 66, language: "Python", archived: true},
  {id: 6, name: "search", stars: 3007, openIssues: 101, language: "Python", archived: true},
  {id: 7, name: "docs", stars: 5089, openIssues: 33, language: "Python", archived: false},
  {id: 8, name: "billing", stars: 2236, openIssues: 136, language: "Python", archived: false}
]
```

Type the parameters and the return value. The interface is already written for you.
