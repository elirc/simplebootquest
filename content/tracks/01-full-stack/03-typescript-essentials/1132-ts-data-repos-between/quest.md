---
slug: "ts-data-repos-between"
title: "Data: Repos in a open issues range"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Repos in a open issues range

Return the names of repos whose `openIssues` is between `low` and `high` **inclusive**. Use `filter` and `map`.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "search", stars: 3173, openIssues: 33, language: "TypeScript", archived: true},
  {id: 2, name: "docs", stars: 2911, openIssues: 131, language: "TypeScript", archived: false},
  {id: 3, name: "analytics", stars: 3313, openIssues: 70, language: "Python", archived: false},
  {id: 4, name: "design-system", stars: 4378, openIssues: 104, language: "Go", archived: true},
  {id: 5, name: "mobile", stars: 2257, openIssues: 90, language: "TypeScript", archived: false},
  {id: 6, name: "auth-service", stars: 243, openIssues: 139, language: "TypeScript", archived: true},
  {id: 7, name: "web-app", stars: 2504, openIssues: 40, language: "Python", archived: false},
  {id: 8, name: "cli", stars: 5338, openIssues: 40, language: "Go", archived: false}
]
```

Type the parameters and the return value. The interface is already written for you.
