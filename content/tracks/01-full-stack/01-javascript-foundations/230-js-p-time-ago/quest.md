---
slug: "js-p-time-ago"
title: "Practice: \"5 minutes ago\""
type: "code"
language: "js"
xp: 15
hints: ["Check the biggest unit first and return as soon as the count is at least 1."]
---
# Practice: "5 minutes ago"

Feeds and comments show relative times.

## Your task
`timeAgo(seconds)` takes how many seconds ago something happened and returns:

- under 60 → `"just now"`
- under 1 hour → `"1 minute ago"` / `"N minutes ago"`
- under 1 day → `"1 hour ago"` / `"N hours ago"`
- under 30 days → `"1 day ago"` / `"N days ago"`
- otherwise → `"N months ago"` (30-day months; `"1 month ago"`)

Always round **down**.
