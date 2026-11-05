---
slug: "js-data-repos-paginate"
title: "Data: Paginate repos"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Paginate repos

Return `{ items, page, totalPages }` where `items` are the names on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "analytics", stars: 43, openIssues: 84, language: "Python", archived: false},
  {id: 2, name: "api-gateway", stars: 630, openIssues: 60, language: "Go", archived: false},
  {id: 3, name: "mobile", stars: 2583, openIssues: 103, language: "TypeScript", archived: false},
  {id: 4, name: "search", stars: 3295, openIssues: 92, language: "TypeScript", archived: true},
  {id: 5, name: "design-system", stars: 1260, openIssues: 109, language: "TypeScript", archived: true},
  {id: 6, name: "infra", stars: 2792, openIssues: 25, language: "Python", archived: false},
  {id: 7, name: "web-app", stars: 5034, openIssues: 13, language: "TypeScript", archived: true},
  {id: 8, name: "billing", stars: 748, openIssues: 120, language: "Python", archived: false}
]
```
