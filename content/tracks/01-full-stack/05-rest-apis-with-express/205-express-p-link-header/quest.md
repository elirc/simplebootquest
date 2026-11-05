---
slug: "express-p-link-header"
title: "Practice: Pagination Links"
type: "code"
language: "js"
xp: 15
resources: [{"title": "GitHub Docs: Using pagination in the REST API", "url": "https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api"}]
---
# Practice: Pagination Links

Clients shouldn't have to build page URLs themselves. GitHub's API returns a `Link` header:

```
Link: <https://api.example.com/todos?page=1&limit=20>; rel="first", <https://api.example.com/todos?page=2&limit=20>; rel="prev", ...
```

## Your task
Write `buildLinks(baseUrl, { page, limit, total })` returning the header value:
- `lastPage = max(1, ceil(total / limit))`.
- Include, in this order: `first`, `prev` (only if page > 1), `next` (only if page < lastPage), `last`.
- Each URL is `baseUrl?page=N&limit=L`, or `&page=…` when `baseUrl` already has a `?`.
- Join entries with `", "`.
