---
slug: "node-p-route-params"
title: "Practice: Matching Route Params"
type: "code"
language: "js"
xp: 15
hints: ["`.split(\"/\").filter(Boolean)` removes the empty strings from leading and trailing slashes.", "After the loop, check that the path had no extra segments left over."]
---
# Practice: Matching Route Params

Express turns `/users/:id` into a matcher and fills `req.params`. Writing one yourself shows exactly what's going on.

## Your task
Write `matchRoute(pattern, path)`:
- Both are split on `/`. Ignore the query string (`?…`) on the path, and treat a trailing slash as optional (`/users/` matches `/users`).
- A `:name` segment captures that segment of the path (URI-decoded) into the result.
- A `*` segment as the **last** segment captures the rest of the path (joined with `/`) as `params['*']`.
- Other segments must match exactly.
- Return the params object on a match (`{}` if no params), or `null`.
