---
slug: "js-data-repos-min"
title: "Data: The repo with the lowest star count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# The repo with the lowest star count

Return the name of the repo with the **lowest** `stars` (first one on ties), or `null` for an empty list.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "docs", stars: 414, openIssues: 36, language: "Python", archived: true},
  {id: 2, name: "mobile", stars: 5352, openIssues: 119, language: "Go", archived: false},
  {id: 3, name: "notifier", stars: 3748, openIssues: 36, language: "TypeScript", archived: false},
  {id: 4, name: "web-app", stars: 4862, openIssues: 46, language: "Python", archived: true},
  {id: 5, name: "search", stars: 844, openIssues: 8, language: "Go", archived: false},
  {id: 6, name: "cli", stars: 2455, openIssues: 132, language: "TypeScript", archived: false},
  {id: 7, name: "api-gateway", stars: 4339, openIssues: 106, language: "Go", archived: false},
  {id: 8, name: "infra", stars: 2051, openIssues: 70, language: "Go", archived: true}
]
```
