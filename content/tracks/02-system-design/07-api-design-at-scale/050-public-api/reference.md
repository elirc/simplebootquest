# Public API v1: Recipe Box

## Authentication & scopes
Developers create **API keys** in their account settings: `rbx_live_` followed by 32 random bytes. Only a SHA-256 hash is stored, and the key is shown once. Each key has scopes (`recipes:read`, `recipes:write`, `webhooks:manage`) and an optional expiry. Keys are sent as `Authorization: Bearer <key>`, can be revoked instantly, and support rotation by keeping two active keys. Later, OAuth (authorization code + PKCE) will let third-party apps act on behalf of *other* users.

## Resources & endpoints
- `GET /v1/recipes`, `POST /v1/recipes`, `GET/PATCH/DELETE /v1/recipes/{id}`
- `GET /v1/recipes/{id}/photos`, `POST /v1/recipes/{id}/photos` (returns a presigned upload URL)
- `GET /v1/tags`

IDs are opaque strings (`rcp_8f2...`). Timestamps are ISO 8601 UTC. Every resource has `created_at` and `updated_at`.

## Pagination & filtering
Cursor pagination: `?limit=50&cursor=...` (max 100), returning `{ data, next_cursor }`. Filters: `?tag=dinner&updated_since=2026-03-01T00:00:00Z`. `updated_since` enables cheap incremental sync.

## Versioning & deprecation
The major version is in the URL (`/v1`). Within v1 we only make additive changes, and clients must ignore unknown fields. Breaking changes mean v2. A deprecated version gets `Deprecation` and `Sunset` headers, an email to key owners, and at least 12 months before removal, with usage tracked per key.

## Rate limits
Per API key with a token bucket: 600 requests/min with bursts to 100, and writes 60/min. Every response carries `RateLimit-Limit/Remaining/Reset`, and a 429 includes `Retry-After`. State is in Redis. If Redis is unavailable we fail open for reads and closed for writes.

## Webhooks
Events: `recipe.created`, `recipe.updated`, `recipe.deleted`. The payload is `{ id: "evt_...", type, created_at, data: { id } }` (thin events: receivers fetch the full resource). Signed with HMAC-SHA256 over `timestamp.body`, in a `Webhook-Signature: t=...,v1=...` header, and receivers should reject timestamps older than 5 minutes. Delivery comes from a job queue with exponential retries for up to 24 h; an endpoint is disabled after 3 days of failures, and its owner is emailed. Destination URLs must be https, and private, loopback and metadata IP ranges are blocked after DNS resolution (SSRF).

## Errors & documentation
Errors: `{ "error": { "type": "invalid_request", "message": "...", "param": "title", "request_id": "req_..." } }`, with appropriate 4xx/5xx statuses. Docs are generated from an OpenAPI 3.1 spec checked into the repo, with a changelog page and copy-paste curl examples.
