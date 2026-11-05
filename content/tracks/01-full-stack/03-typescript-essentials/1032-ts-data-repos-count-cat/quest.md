---
slug: "ts-data-repos-count-cat"
title: "Data: Count repos by language"
type: "code"
language: "ts"
xp: 15
optional: true
section: "Practice: Typed Data"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Count repos by language

Return how many repos have `language` equal to `value`.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "mobile", stars: 4716, openIssues: 98, language: "Python", archived: true},
  {id: 2, name: "web-app", stars: 3730, openIssues: 57, language: "TypeScript", archived: false},
  {id: 3, name: "auth-service", stars: 5187, openIssues: 57, language: "Go", archived: false},
  {id: 4, name: "api-gateway", stars: 2550, openIssues: 103, language: "Go", archived: true},
  {id: 5, name: "notifier", stars: 3124, openIssues: 133, language: "TypeScript", archived: true},
  {id: 6, name: "cli", stars: 2047, openIssues: 87, language: "TypeScript", archived: true},
  {id: 7, name: "analytics", stars: 3211, openIssues: 100, language: "Go", archived: false},
  {id: 8, name: "infra", stars: 1426, openIssues: 62, language: "Go", archived: false}
]
```

Type the parameters and the return value. The interface is already written for you.
