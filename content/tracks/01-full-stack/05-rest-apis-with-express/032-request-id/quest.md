---
slug: "express-request-id"
title: "Request IDs & Timing"
type: "code"
language: "js"
xp: 20
hints: ["Validate the incoming header with the regex before trusting it.", "Read `res.statusCode` inside the finish callback, not before."]
---
# Request IDs & Timing

When something goes wrong in production, you need to find **every log line for one request**. A request-id middleware:

1. Reuses an incoming `X-Request-Id` header (set by a load balancer), or generates a new id.
2. Attaches it to `req.id`, and echoes it back in the response header.
3. Logs the request once the response has finished, including how long it took.

Users can quote the id from an error page ("Error ref: 9f2c…") and you can grep for it.

## Your task

`requestContext({ generateId, now, log })` returns middleware that:

- sets `req.id` from the `x-request-id` header if it matches `/^[\w-]{1,64}$/` (never trust arbitrary input in log lines), otherwise from `generateId()`,
- calls `res.set('X-Request-Id', id)`,
- records the start time with `now()`,
- registers a callback with `res.on('finish', cb)` that calls `log({ id, method, path, status: res.statusCode, ms })`,
- calls `next()`.
