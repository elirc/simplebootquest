---
slug: "express-idempotency"
title: "Idempotency Keys"
type: "code"
language: "js"
xp: 30
hints: ["Save `res.json.bind(res)` before replacing it, and call the original inside your wrapper.", "Use a sentinel value like `\"in-progress\"` to detect concurrent duplicates."]
resources: [{"title": "Stripe: Idempotent requests", "url": "https://docs.stripe.com/api/idempotent_requests"}]
---
# Idempotency Keys

`POST /payments` isn't idempotent: if the client's connection drops after the server charged the card, retrying charges it **twice**. Payment APIs like Stripe solve this with an `Idempotency-Key` header:

1. The client generates a unique key per logical operation, and sends it with every retry.
2. The server stores the response for that key.
3. A repeat request with the same key gets the **stored response**, and the work isn't done again.

```http
POST /payments
Idempotency-Key: 3f9c2b...
```

## Your task

`idempotency(store)` returns middleware, where `store` is a `Map`:

- Only applies to `POST` requests that have an `idempotency-key` header. Everything else calls `next()`.
- If the key has a stored response, replay it with `res.status(saved.status).json(saved.body)` plus the header `Idempotent-Replayed: true`, without calling `next`.
- If the key is **in progress** (a concurrent duplicate), respond `409` with `{ error: 'Request in progress' }`.
- Otherwise, mark the key in progress, **wrap `res.json`** so that when the handler responds, the status and body are saved under the key, then call `next()`.
- Responses with a status of 500 or above are **not** saved: the key is removed so the client can retry.
