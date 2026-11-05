---
slug: "sd07-api-choice-1"
title: "Design Drill: API design decisions #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**a client retries a POST /payments after a timeout**. What's the best design?","options":["Add the new field, deprecate the old one, remove it after clients migrate","Require an Idempotency-Key and replay the stored response","Cursor (keyset) pagination","Send signed webhooks with retries (and offer a polling endpoint)"],"answer":1},{"prompt":"**an infinite-scroll feed where new items arrive constantly**. What's the best design?","options":["Add the new field, deprecate the old one, remove it after clients migrate","Require an Idempotency-Key and replay the stored response","Send signed webhooks with retries (and offer a polling endpoint)","Cursor (keyset) pagination"],"answer":3},{"prompt":"**a client exceeds its quota**. What's the best design?","options":["Send signed webhooks with retries (and offer a polling endpoint)","Require an Idempotency-Key and replay the stored response","429 Too Many Requests with a Retry-After header","Add the new field, deprecate the old one, remove it after clients migrate"],"answer":2},{"prompt":"**you need to rename a response field used by mobile apps**. What's the best design?","options":["Cursor (keyset) pagination","Require an Idempotency-Key and replay the stored response","Add the new field, deprecate the old one, remove it after clients migrate","Send signed webhooks with retries (and offer a polling endpoint)"],"answer":2},{"prompt":"**a third-party app acts on behalf of a user**. What's the best design?","options":["OAuth 2.0 authorization code with PKCE and scoped tokens","Add the new field, deprecate the old one, remove it after clients migrate","Send signed webhooks with retries (and offer a polling endpoint)","Require an Idempotency-Key and replay the stored response"],"answer":0}]
---
# Design Drill: API design decisions #1

Good public APIs are **predictable**: consistent resource names, the right status codes, cursor pagination, idempotency keys for unsafe operations, and additive versioning.
