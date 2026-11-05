---
slug: "debug-repos-percent"
title: "Debug: What share of repos are archived?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Debugging"
hints: ["Run the tests first and read the failing test's expected vs. received values carefully.","The bug is a single small change: look at comparisons, sort directions, starting values and rounding."]
---
# Debug: What share of repos are archived?

This function was written by a teammate (or an AI agent) and **one test fails**. The bug causes an inverted condition. Don't rewrite it from scratch: run the tests, read the failure, find the one wrong thing, and fix it.

Return the percentage (0–100, rounded to a whole number) of repos where `archived` is true. Return 0 for an empty list.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "web-app", stars: 1954, openIssues: 6, language: "TypeScript", archived: false},
  {id: 2, name: "infra", stars: 2084, openIssues: 26, language: "TypeScript", archived: false},
  {id: 3, name: "analytics", stars: 2798, openIssues: 62, language: "Go", archived: true},
  {id: 4, name: "search", stars: 2147, openIssues: 31, language: "Python", archived: true},
  {id: 5, name: "design-system", stars: 954, openIssues: 98, language: "Python", archived: true},
  {id: 6, name: "cli", stars: 4621, openIssues: 41, language: "Python", archived: false},
  {id: 7, name: "notifier", stars: 5245, openIssues: 93, language: "TypeScript", archived: true},
  {id: 8, name: "billing", stars: 1548, openIssues: 55, language: "TypeScript", archived: false}
]
```
