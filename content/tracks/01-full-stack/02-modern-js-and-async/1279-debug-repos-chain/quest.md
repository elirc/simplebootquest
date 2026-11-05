---
slug: "debug-repos-chain"
title: "Debug: Filter, sort, map: repos in one language"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: Filter, sort, map: repos in one language

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes results in the wrong order. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the names of repos whose `language` equals `value`, sorted by `openIssues` **highest first**. One chain of array methods is enough.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "search", stars: 5061, openIssues: 68, language: "TypeScript", archived: false},
  {id: 2, name: "api-gateway", stars: 1522, openIssues: 75, language: "Python", archived: false},
  {id: 3, name: "analytics", stars: 2327, openIssues: 102, language: "Python", archived: false},
  {id: 4, name: "docs", stars: 400, openIssues: 22, language: "Python", archived: true},
  {id: 5, name: "auth-service", stars: 5382, openIssues: 6, language: "Python", archived: true},
  {id: 6, name: "mobile", stars: 528, openIssues: 75, language: "Go", archived: false},
  {id: 7, name: "notifier", stars: 4178, openIssues: 87, language: "Python", archived: false},
  {id: 8, name: "web-app", stars: 4292, openIssues: 46, language: "TypeScript", archived: true}
]
```
