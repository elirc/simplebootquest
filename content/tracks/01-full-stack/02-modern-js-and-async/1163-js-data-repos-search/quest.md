---
slug: "js-data-repos-search"
title: "Data: Search repos by name"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Search repos by name

Return the names that **contain** `query`, ignoring case. An empty (or whitespace-only) query returns every name.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "auth-service", stars: 4555, openIssues: 12, language: "TypeScript", archived: false},
  {id: 2, name: "search", stars: 2769, openIssues: 85, language: "Go", archived: false},
  {id: 3, name: "design-system", stars: 92, openIssues: 91, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 3255, openIssues: 64, language: "Go", archived: true},
  {id: 5, name: "notifier", stars: 4704, openIssues: 14, language: "TypeScript", archived: false},
  {id: 6, name: "infra", stars: 232, openIssues: 74, language: "TypeScript", archived: true},
  {id: 7, name: "mobile", stars: 4507, openIssues: 26, language: "Python", archived: false},
  {id: 8, name: "billing", stars: 2364, openIssues: 125, language: "Go", archived: true}
]
```
