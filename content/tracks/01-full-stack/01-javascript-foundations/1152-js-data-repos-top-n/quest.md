---
slug: "js-data-repos-top-n"
title: "Data: Top repos by star count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Top repos by star count

Return the names of the `n` repos with the **highest** `stars`, highest first. Don't mutate the input.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "notifier", stars: 3607, openIssues: 105, language: "Go", archived: true},
  {id: 2, name: "design-system", stars: 3287, openIssues: 89, language: "Go", archived: false},
  {id: 3, name: "web-app", stars: 4431, openIssues: 130, language: "Python", archived: true},
  {id: 4, name: "cli", stars: 4367, openIssues: 16, language: "Python", archived: false},
  {id: 5, name: "search", stars: 1153, openIssues: 33, language: "Python", archived: true},
  {id: 6, name: "auth-service", stars: 2913, openIssues: 137, language: "Go", archived: true},
  {id: 7, name: "billing", stars: 3002, openIssues: 46, language: "Python", archived: false},
  {id: 8, name: "infra", stars: 1951, openIssues: 118, language: "Python", archived: true}
]
```
