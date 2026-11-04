---
slug: js-boss-api-client
title: "Boss: REST API Client"
type: code
language: js
xp: 60
boss: true
---
# Boss: REST API Client

Every frontend needs a small layer that talks to the backend. You'll build one now and use the same idea in your React app later.

Implement `createApiClient(baseUrl, fetchFn)`, which returns an object with CRUD methods for a resource:

| Method | Request | Returns |
|--------|---------|---------|
| `list(resource)` | `GET {baseUrl}/{resource}` | parsed JSON |
| `get(resource, id)` | `GET {baseUrl}/{resource}/{id}` | parsed JSON |
| `create(resource, data)` | `POST {baseUrl}/{resource}` with a JSON body | parsed JSON |
| `update(resource, id, data)` | `PATCH {baseUrl}/{resource}/{id}` with a JSON body | parsed JSON |
| `remove(resource, id)` | `DELETE {baseUrl}/{resource}/{id}` | `null` (responses are `204 No Content`) |

Requirements:

- Requests with a body send the header `'Content-Type': 'application/json'` and a `JSON.stringify`'d body.
- `fetchFn` is called as `fetchFn(url, options)`, where `options` always includes `method`.
- If the response is not `ok`, throw an `ApiError` (you define it) with `status` and `body` properties. `body` is the parsed JSON error body, or `null` if parsing fails. Use the message `"<METHOD> <url> failed with <status>"`.
- **Retry:** `GET` requests that fail with a status of **500 or above** are retried up to 2 more times (3 attempts in total). Never retry `POST`, `PATCH` or `DELETE`, because they might not be safe to repeat.
