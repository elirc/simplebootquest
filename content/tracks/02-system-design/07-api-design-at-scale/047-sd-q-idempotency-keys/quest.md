---
slug: "sd-q-idempotency-keys"
title: "Idempotency Keys for Unsafe Requests"
type: "quiz"
xp: 15
resources: [{"title": "Stripe: Idempotent requests", "url": "https://docs.stripe.com/api/idempotent_requests"}]
questions: [{"prompt": "Who generates the idempotency key?", "options": ["The server", "The client, once per logical operation (and reused for its retries)", "The database"], "answer": 1}, {"prompt": "A retry arrives with a key that already completed. What should the server return?", "options": ["Process it again", "The stored original response", "404"], "answer": 1}, {"prompt": "Two identical retries arrive at the same moment. What prevents double processing?", "options": ["Luck", "Atomically claiming the key, e.g. a unique constraint on insert", "A longer timeout"], "answer": 1}, {"prompt": "The same key arrives with a different body. What does that indicate?", "options": ["Normal retry", "A client bug: reject it (e.g. 422)", "A cache hit"], "answer": 1}, {"prompt": "Which methods most need idempotency keys?", "options": ["GET", "POST (non-idempotent creates and actions)", "HEAD"], "answer": 1}]
---
# Idempotency Keys for Unsafe Requests

A client sends `POST /payments`, the connection drops, and the client doesn't know whether the payment happened. Retrying might charge twice. **Idempotency keys** make retries safe:

```
POST /payments
Idempotency-Key: 6f1c2b8e-...   (a UUID the client generates per logical operation)
```

Server behaviour (this is how Stripe does it):
1. Look up the key, scoped to the authenticated client.
2. **Not seen** → record it as "in progress", process the request, then store the **response** (status and body) with the key.
3. **Seen and completed** → return the **stored response** without processing again.
4. **Seen and still in progress** → return `409 Conflict` (a concurrent duplicate).
5. **Same key, different request body** → `422`, because that's a client bug.
6. Expire keys after, for example, 24 hours.

The "record the key" step must be **atomic** (a unique constraint), or two simultaneous retries can both pass the "not seen" check.
