---
slug: "sd-q-load-testing"
title: "Load Testing and Capacity Planning"
type: "quiz"
xp: 15
resources: [{"title": "Grafana k6 documentation", "url": "https://grafana.com/docs/k6/latest/"}]
questions: [{"prompt": "Which test finds memory leaks that only appear after hours?", "options": ["Spike test", "Soak test", "Unit test"], "answer": 1}, {"prompt": "Why seed staging with realistic data volumes before load testing?", "options": ["For realism in screenshots", "Query performance depends heavily on table size, so empty tables hide slow queries", "It is free"], "answer": 1}, {"prompt": "Which latency number is most important for user experience under load?", "options": ["The average only", "High percentiles like p95 and p99", "The minimum"], "answer": 1}, {"prompt": "What is \"the knee\" of a load curve?", "options": ["The fastest request", "The load level at which latency starts rising sharply", "Half of the maximum"], "answer": 1}, {"prompt": "Should you include the real payment provider in your load test?", "options": ["Yes, always", "No: stub it (or get permission), or you may get blocked or charged"], "answer": 1}]
---
# Load Testing and Capacity Planning

"Will it handle Black Friday?" Don't guess. **Load test.**

- **Tools**: k6, Artillery, autocannon, or Locust. Script realistic **user journeys** (log in → list → create), not just one endpoint hammered in a loop.
- **Test types**: a *load* test (expected peak), a *stress* test (increase until it breaks, to find the limit), a *soak* test (hours at normal load, to find memory leaks and connection leaks), and a *spike* test (sudden jumps).
- **Environment**: a production-like staging environment with realistic data volumes. An empty database makes every query fast.
- **Watch**: p50, p95 and p99 latency, the error rate, and saturation (CPU, memory, DB connections, pool wait time), **not just throughput**.
- **Find the knee**: the point where latency starts rising sharply. Plan to run comfortably below it (for example at 50–60% of the knee), so there's headroom for spikes and a lost instance.
- **Don't** load test third-party APIs (payment, email) without permission. Stub them.
