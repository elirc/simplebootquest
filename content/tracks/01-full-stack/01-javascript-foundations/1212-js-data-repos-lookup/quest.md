---
slug: "js-data-repos-lookup"
title: "Data: Look up a repo's open issues"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Look up a repo's open issues

Return the `openIssues` of the repo whose name is `name`, or `null` if there isn't one.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "search", stars: 2838, openIssues: 96, language: "Go", archived: true},
  {id: 2, name: "billing", stars: 2058, openIssues: 38, language: "TypeScript", archived: true},
  {id: 3, name: "auth-service", stars: 3360, openIssues: 63, language: "Go", archived: true},
  {id: 4, name: "design-system", stars: 1768, openIssues: 20, language: "Go", archived: true},
  {id: 5, name: "mobile", stars: 3924, openIssues: 67, language: "Go", archived: false},
  {id: 6, name: "web-app", stars: 1698, openIssues: 86, language: "Python", archived: false},
  {id: 7, name: "analytics", stars: 3036, openIssues: 115, language: "Go", archived: true},
  {id: 8, name: "notifier", stars: 5188, openIssues: 48, language: "Python", archived: true}
]
```
