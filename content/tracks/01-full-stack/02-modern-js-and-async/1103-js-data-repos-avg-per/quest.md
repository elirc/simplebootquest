---
slug: "js-data-repos-avg-per"
title: "Data: Average open issues per language"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Average open issues per language

Return an object mapping each `language` to the average `openIssues` of its repos, rounded to a whole number.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "web-app", stars: 3604, openIssues: 25, language: "Python", archived: true},
  {id: 2, name: "search", stars: 33, openIssues: 112, language: "TypeScript", archived: true},
  {id: 3, name: "cli", stars: 3468, openIssues: 54, language: "Python", archived: false},
  {id: 4, name: "notifier", stars: 4800, openIssues: 64, language: "TypeScript", archived: true},
  {id: 5, name: "analytics", stars: 4345, openIssues: 90, language: "TypeScript", archived: true},
  {id: 6, name: "auth-service", stars: 1079, openIssues: 53, language: "Go", archived: false},
  {id: 7, name: "infra", stars: 2690, openIssues: 135, language: "Python", archived: true},
  {id: 8, name: "design-system", stars: 564, openIssues: 5, language: "Go", archived: false}
]
```
