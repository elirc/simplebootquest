---
slug: "js-data-repos-update"
title: "Data: Update repos immutably"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Spread to copy: `{ ...x, field: newValue }`.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Update repos immutably

Return a **new** array where every repo with `language` equal to `value` has `stars` increased by `amount`. Other repos are unchanged. **Don't mutate** the input objects (React state depends on this).

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "web-app", stars: 5310, openIssues: 95, language: "Go", archived: false},
  {id: 2, name: "analytics", stars: 1323, openIssues: 72, language: "TypeScript", archived: false},
  {id: 3, name: "notifier", stars: 1700, openIssues: 130, language: "Go", archived: true},
  {id: 4, name: "docs", stars: 1279, openIssues: 76, language: "Python", archived: true},
  {id: 5, name: "infra", stars: 1628, openIssues: 129, language: "Python", archived: false},
  {id: 6, name: "api-gateway", stars: 5011, openIssues: 107, language: "Go", archived: true},
  {id: 7, name: "design-system", stars: 1729, openIssues: 76, language: "Python", archived: true},
  {id: 8, name: "auth-service", stars: 3226, openIssues: 127, language: "TypeScript", archived: true}
]
```
