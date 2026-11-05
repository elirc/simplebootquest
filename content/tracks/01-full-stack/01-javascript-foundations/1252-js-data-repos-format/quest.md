---
slug: "js-data-repos-format"
title: "Data: Format repos as labels"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Format repos as labels

Return one string per repo: `"<name> (<stars>)"`, e.g. `"cli (2492)"`.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "cli", stars: 2492, openIssues: 39, language: "TypeScript", archived: true},
  {id: 2, name: "web-app", stars: 3211, openIssues: 50, language: "TypeScript", archived: true},
  {id: 3, name: "search", stars: 2883, openIssues: 44, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 111, openIssues: 94, language: "TypeScript", archived: true},
  {id: 5, name: "analytics", stars: 4326, openIssues: 94, language: "TypeScript", archived: true},
  {id: 6, name: "billing", stars: 473, openIssues: 116, language: "Python", archived: true},
  {id: 7, name: "api-gateway", stars: 2746, openIssues: 22, language: "TypeScript", archived: false},
  {id: 8, name: "mobile", stars: 2466, openIssues: 58, language: "Go", archived: false}
]
```
