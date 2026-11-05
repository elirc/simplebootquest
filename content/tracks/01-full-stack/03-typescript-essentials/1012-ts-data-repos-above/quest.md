---
slug: "ts-data-repos-above"
title: "Data: Repos with a star count above a limit"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Repos with a star count above a limit

Return the name of every repo whose `stars` is **greater than** `min`, in the original order.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "search", stars: 1402, openIssues: 31, language: "TypeScript", archived: true},
  {id: 2, name: "web-app", stars: 3081, openIssues: 9, language: "TypeScript", archived: false},
  {id: 3, name: "analytics", stars: 1482, openIssues: 20, language: "Go", archived: false},
  {id: 4, name: "notifier", stars: 1708, openIssues: 97, language: "TypeScript", archived: false},
  {id: 5, name: "cli", stars: 3953, openIssues: 28, language: "TypeScript", archived: false},
  {id: 6, name: "design-system", stars: 3259, openIssues: 52, language: "TypeScript", archived: false},
  {id: 7, name: "billing", stars: 4051, openIssues: 54, language: "Go", archived: true},
  {id: 8, name: "infra", stars: 19, openIssues: 42, language: "Go", archived: true}
]
```

Type the parameters and the return value. The interface is already written for you.
