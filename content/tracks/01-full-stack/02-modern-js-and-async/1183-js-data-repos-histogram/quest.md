---
slug: "js-data-repos-histogram"
title: "Data: Bucket repos by star count"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Data Wrangling"
hints: ["Loop over the array (or use filter/map/reduce) and build the result step by step.","Check the empty-list case: what should your function return when there is nothing to process?"]
---
# Bucket repos by star count

Group repos into buckets of width `width` by `stars`: the bucket key is `Math.floor(value / width) * width`. Return an object of bucket → count.

The tests call your function with this data (also available as `REPOS` in the tests):

```js
const REPOS = [
  {id: 1, name: "notifier", stars: 2310, openIssues: 118, language: "Go", archived: true},
  {id: 2, name: "billing", stars: 2133, openIssues: 109, language: "Python", archived: true},
  {id: 3, name: "infra", stars: 3272, openIssues: 83, language: "Go", archived: false},
  {id: 4, name: "auth-service", stars: 3783, openIssues: 56, language: "TypeScript", archived: true},
  {id: 5, name: "mobile", stars: 3917, openIssues: 2, language: "Python", archived: true},
  {id: 6, name: "analytics", stars: 2489, openIssues: 61, language: "TypeScript", archived: false},
  {id: 7, name: "search", stars: 2067, openIssues: 20, language: "TypeScript", archived: false},
  {id: 8, name: "api-gateway", stars: 4103, openIssues: 135, language: "Python", archived: true}
]
```
