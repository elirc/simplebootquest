---
slug: "sd-resilience-patterns"
title: "Timeouts, Retries & Circuit Breakers"
type: "quiz"
xp: 15
resources: [{"title": "Release It! (Michael Nygard)", "url": "https://pragprog.com/titles/mnee2/release-it-second-edition/"}, {"title": "AWS: Timeouts, retries and backoff with jitter", "url": "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/"}]
questions: [{"prompt": "What is a cascading failure?", "options": ["A deployment that rolls back", "A slow or failing dependency causes your own service to fail, and so on upstream", "Many logs at once"], "answer": 1}, {"prompt": "What should every outbound HTTP call have?", "options": ["A retry loop with no limit", "A timeout", "Caching"], "answer": 1}, {"prompt": "What does an open circuit breaker do?", "options": ["Retries harder", "Fails fast without calling the dependency, giving it time to recover", "Logs more"], "answer": 1}, {"prompt": "Why can retries make an outage worse?", "options": ["They are slower", "They multiply load on an already struggling dependency, especially across layers", "They don't"], "answer": 1}, {"prompt": "What does a bulkhead protect against?", "options": ["SQL injection", "One slow dependency exhausting resources needed by unrelated features", "Disk failure"], "answer": 1}]
---
# Timeouts, Retries & Circuit Breakers

Your API depends on a payment provider, an email service, maybe another internal service. When one of them gets **slow**, a naive app falls over too:

- requests pile up waiting,
- connections and memory run out,
- now **your** service is down: a *cascading failure*.

### The toolkit

- **Timeouts on every outbound call.** The default in many HTTP clients is "wait forever"! Pick a timeout from the dependency's normal p99.
- **Retries** only for idempotent and transient failures, with exponential backoff, jitter and a cap. Retries multiply load, so 3 layers × 3 retries = 27 attempts.
- **Circuit breakers**: after N failures, stop calling the dependency for a while ("open" the circuit) and fail fast. Then let a few test requests through ("half-open"). This gives the dependency time to recover.
- **Bulkheads**: separate resource pools (connection pools, concurrency limits) per dependency, so a slow email service can't use up the capacity needed for checkout.
- **Fallbacks / graceful degradation**: show cached recommendations, hide the widget, or queue the action for later.
