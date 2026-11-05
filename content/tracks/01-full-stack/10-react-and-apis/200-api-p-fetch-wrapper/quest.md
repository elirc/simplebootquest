---
slug: "api-p-fetch-wrapper"
title: "Practice: A Typed Fetch Wrapper"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["`fetch` only rejects for network failures. A 404 or 500 resolves normally with `ok: false`, so you must check it yourself."]
resources: [{"title": "MDN: Using the Fetch API", "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"}]
---
# Practice: A Typed Fetch Wrapper

Calling `fetch` directly in every component means repeating the same chores: JSON headers, cookies, checking `res.ok` (fetch does **not** reject on 404 or 500!), and parsing errors. Put it in one place.

## Your task
Write `createApi(fetchImpl, baseUrl)` returning `request(path, { method = 'GET', body } = {})`:
- Calls `fetchImpl(baseUrl + path, init)` with `method`, `credentials: 'include'` (send the auth cookie), and `headers: { Accept: 'application/json' }`. When there's a `body`, also add `'Content-Type': 'application/json'` and pass `JSON.stringify(body)`.
- `204` → resolve `null`.
- `res.ok` → resolve `await res.json()`.
- Otherwise throw an `ApiError` (provided) with `status` and the server's message: `json.error.message`, then `json.error` if it's a string, then `res.statusText`. If the error body isn't JSON, fall back to `statusText`.
- If `fetchImpl` itself rejects (offline, DNS, CORS), throw `ApiError` with status `0` and message `'Network error'`.
