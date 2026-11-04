---
slug: "express-created-response"
title: "Good Responses: 201, Location & Link"
type: "code"
language: "js"
xp: 20
hints: ["The mock `res.status` and `res.set` return `res`, so you can chain calls.", "Compute `lastPage` once, with `Math.max(1, ...)`."]
resources: [{"title": "GitHub API: Using pagination", "url": "https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api"}]
---
# Good Responses: 201, Location & Link

Small details make an API pleasant to use:

- **`201 Created`** with a `Location` header pointing to the new resource: `Location: /api/todos/42`.
- **`204 No Content`** for successful deletes, with no body at all.
- **Pagination links** in a `Link` header (used by the GitHub API, for example):

```http
Link: </api/todos?page=3&pageSize=20>; rel="next", </api/todos?page=1&pageSize=20>; rel="prev"
```

Clients can follow `rel="next"` without building URLs themselves.

## Your task

1. `created(res, basePath, resource)` sets status 201, sets `Location` to `<basePath>/<resource.id>`, and sends the resource as JSON.
2. `noContent(res)` sets 204 and ends the response.
3. `paginationLinks(basePath, { page, pageSize, total })` returns the `Link` header value with `first`, `prev` (if `page > 1`), `next` (if there are more pages) and `last` links, in that order. Each URL includes `page` and `pageSize`. With 0 items, `last` is page 1.
