---
slug: "js-data-repos-group-count"
title: "Data: How many repos per language?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# How many repos per language?

Return an object mapping each `language` to the number of repos with it. Only include values that appear.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "web-app", stars: 2658, openIssues: 56, language: "Go", archived: false},
  {id: 2, name: "billing", stars: 73, openIssues: 113, language: "Python", archived: false},
  {id: 3, name: "api-gateway", stars: 179, openIssues: 134, language: "Python", archived: true},
  {id: 4, name: "auth-service", stars: 2962, openIssues: 5, language: "TypeScript", archived: false},
  {id: 5, name: "search", stars: 2552, openIssues: 78, language: "Go", archived: false},
  {id: 6, name: "mobile", stars: 183, openIssues: 90, language: "Go", archived: false},
  {id: 7, name: "docs", stars: 2732, openIssues: 33, language: "Python", archived: false},
  {id: 8, name: "notifier", stars: 735, openIssues: 126, language: "Python", archived: true}
]
```
