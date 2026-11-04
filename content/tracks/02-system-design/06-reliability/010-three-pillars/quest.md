---
slug: "sd-observability-pillars"
title: "Logs, Metrics & Traces"
type: "quiz"
xp: 15
resources: [{"title": "OpenTelemetry for Node.js", "url": "https://opentelemetry.io/docs/languages/js/"}, {"title": "Google SRE book: Monitoring", "url": "https://sre.google/sre-book/monitoring-distributed-systems/"}]
questions: [{"prompt": "Which signal best answers \"why was this specific request slow?\"", "options": ["Metrics", "A distributed trace", "Uptime checks"], "answer": 1}, {"prompt": "What are RED metrics?", "options": ["Read, Edit, Delete", "Rate, Errors, Duration per endpoint", "Redis, Express, Docker"], "answer": 1}, {"prompt": "Why not use userId as a metric label?", "options": ["Privacy only", "Unbounded cardinality creates a time series per user and explodes cost", "Labels must be numbers"], "answer": 1}, {"prompt": "What makes logs from one request easy to find?", "options": ["Logging more lines", "A request id included on every log line", "Plain-text logs"], "answer": 1}, {"prompt": "What does OpenTelemetry provide?", "options": ["A database", "Vendor-neutral instrumentation for traces, metrics and logs", "A logging format only"], "answer": 1}]
---
# Logs, Metrics & Traces

The three pillars of **observability**, the ability to ask your system new questions without shipping new code:

| Signal | What | Good for | Example |
|--------|------|----------|---------|
| **Logs** | Discrete events, ideally structured JSON | "What exactly happened to request X?" | `{"level":"error","requestId":"r1","msg":"payment failed"}` |
| **Metrics** | Numbers aggregated over time | Dashboards, alerts, trends | `http_requests_total`, p95 latency, queue depth |
| **Traces** | One request's path across services, with timings for each step | "Where did these 800 ms go?" | API 20 ms → DB 600 ms → cache 2 ms |

### Practical setup for a Node app

- Structured logs with a **request id** on every line (you built this!).
- RED metrics per endpoint: **R**ate, **E**rrors, **D**uration.
- **OpenTelemetry** auto-instrumentation for Express, `pg` and HTTP calls gives you traces with almost no code.
- Error tracking (Sentry, or similar) with stack traces and release tags.

Cardinality warning: never use unbounded values like user ids as **metric labels**. Each unique value creates a new time series, and costs explode. Put them in logs and traces instead.
