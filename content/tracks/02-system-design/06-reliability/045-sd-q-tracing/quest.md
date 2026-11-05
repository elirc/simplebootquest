---
slug: "sd-q-tracing"
title: "Correlation IDs and Distributed Tracing"
type: "quiz"
xp: 15
resources: [{"title": "OpenTelemetry: Node.js getting started", "url": "https://opentelemetry.io/docs/languages/js/getting-started/nodejs/"}]
questions: [{"prompt": "What is the purpose of a correlation (request) id?", "options": ["Authentication", "Linking every log line and downstream call that belong to one request", "Caching"], "answer": 1}, {"prompt": "Why return the request id in a response header?", "options": ["For SEO", "Users and support can quote it, so engineers can find the exact logs", "Browsers require it"], "answer": 1}, {"prompt": "What does a trace show that logs alone make hard?", "options": ["Nothing", "Where the time went across services and calls, as a tree of timed spans", "CPU temperature"], "answer": 1}, {"prompt": "Which header carries trace context in the W3C standard?", "options": ["X-Forwarded-For", "traceparent", "Authorization"], "answer": 1}, {"prompt": "What is a sensible sampling strategy?", "options": ["Record nothing", "Keep all errors and slow traces, and sample a percentage of normal ones", "Record everything forever"], "answer": 1}]
---
# Correlation IDs and Distributed Tracing

A user reports "saving failed at 14:02". With 6 instances and 3 services, which log lines belong to that request?

**Correlation ids** solve it: generate a `requestId` at the edge (or accept a trusted `X-Request-Id`), put it in **every log line**, return it in a response header (so users and support can quote it), and pass it on to every downstream call.

**Distributed tracing** (OpenTelemetry) goes further. Each operation is a **span** with a start, a duration and a parent, so one request becomes a tree:

```
POST /api/orders           420 ms
├─ auth middleware           3 ms
├─ SELECT cart items        12 ms
├─ payment provider call   380 ms   ← there's the problem
└─ INSERT order              9 ms
```

The trace context travels in the W3C `traceparent` header. Libraries auto-instrument Express, `http`, Prisma and fetch.

Sampling keeps costs down: keep all errors and slow requests, and a small percentage of the rest.
