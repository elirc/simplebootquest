---
slug: "js-data-repos-diff"
title: "Data: What changed between two snapshots?"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# What changed between two snapshots?

Given yesterday's and today's repos (same ids), return the ids whose `stars` changed, in today's order.

The tests call your function with this data (also available as `BEFORE` / `AFTER` in the tests):

```js
const BEFORE = [
  {id: 1, name: "api-gateway", stars: 4042, openIssues: 77, language: "TypeScript", archived: true},
  {id: 2, name: "cli", stars: 5051, openIssues: 123, language: "Python", archived: true},
  {id: 3, name: "analytics", stars: 4755, openIssues: 58, language: "TypeScript", archived: false},
  {id: 4, name: "mobile", stars: 1950, openIssues: 76, language: "Go", archived: true},
  {id: 5, name: "web-app", stars: 3969, openIssues: 50, language: "TypeScript", archived: true},
  {id: 6, name: "notifier", stars: 377, openIssues: 69, language: "Go", archived: false},
  {id: 7, name: "auth-service", stars: 2456, openIssues: 63, language: "TypeScript", archived: false},
  {id: 8, name: "docs", stars: 1024, openIssues: 137, language: "Python", archived: false}
]
```
