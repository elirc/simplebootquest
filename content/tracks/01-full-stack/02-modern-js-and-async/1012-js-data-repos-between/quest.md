---
slug: "js-data-repos-between"
title: "Data: Repos in a open issues range"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Repos in a open issues range

Return the names of repos whose `openIssues` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "analytics", stars: 2959, openIssues: 79, language: "TypeScript", archived: true},
  {id: 2, name: "cli", stars: 5148, openIssues: 129, language: "Go", archived: false},
  {id: 3, name: "search", stars: 2298, openIssues: 96, language: "TypeScript", archived: true},
  {id: 4, name: "design-system", stars: 2698, openIssues: 44, language: "Go", archived: false},
  {id: 5, name: "billing", stars: 1104, openIssues: 124, language: "TypeScript", archived: true},
  {id: 6, name: "mobile", stars: 3911, openIssues: 13, language: "TypeScript", archived: false},
  {id: 7, name: "docs", stars: 2778, openIssues: 133, language: "TypeScript", archived: false},
  {id: 8, name: "web-app", stars: 2263, openIssues: 119, language: "Python", archived: false}
]
```
