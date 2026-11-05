---
slug: "js-data-repos-partition"
title: "Data: Split repos by \"archived\""
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Split repos by "archived"

Return `{ yes, no }`: the names of repos where `archived` is true, and those where it's false. Keep the original order.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "design-system", stars: 2228, openIssues: 74, language: "Go", archived: true},
  {id: 2, name: "notifier", stars: 2962, openIssues: 46, language: "TypeScript", archived: true},
  {id: 3, name: "web-app", stars: 867, openIssues: 22, language: "Python", archived: false},
  {id: 4, name: "api-gateway", stars: 3122, openIssues: 50, language: "Go", archived: true},
  {id: 5, name: "infra", stars: 3612, openIssues: 35, language: "TypeScript", archived: true},
  {id: 6, name: "docs", stars: 444, openIssues: 101, language: "TypeScript", archived: true},
  {id: 7, name: "search", stars: 3087, openIssues: 96, language: "TypeScript", archived: true},
  {id: 8, name: "analytics", stars: 3483, openIssues: 95, language: "Python", archived: false}
]
```
