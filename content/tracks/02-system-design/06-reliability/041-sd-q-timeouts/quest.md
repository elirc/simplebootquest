---
slug: "sd-q-timeouts"
title: "Timeouts, Retries and Retry Storms"
type: "quiz"
xp: 15
resources: [{"title": "AWS Builders Library: Timeouts, retries and backoff with jitter", "url": "https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/"}]
questions: [{"prompt": "What is the default timeout of fetch in Node?", "options": ["30 seconds", "There is none: you must set one, e.g. with AbortSignal.timeout", "5 seconds"], "answer": 1}, {"prompt": "Three layers each retry 3 times. How many calls can one request cause at the bottom layer?", "options": ["3", "9", "27"], "answer": 2}, {"prompt": "Which operations are safe to retry automatically?", "options": ["Any POST", "Idempotent ones (GET, PUT, DELETE), or ones protected with an idempotency key", "None"], "answer": 1}, {"prompt": "What does a circuit breaker do when a dependency keeps failing?", "options": ["Retries harder", "Fails fast for a cool-down period, then lets a few test requests through", "Restarts the dependency"], "answer": 1}, {"prompt": "Why propagate deadlines downstream?", "options": ["For logging", "There is no point starting work the caller will no longer wait for", "It is required by HTTP"], "answer": 1}]
---
# Timeouts, Retries and Retry Storms

**Every network call needs a timeout.** Without one, a slow dependency makes your requests hang, holding connections and memory until the whole service locks up. Node's `fetch` has **no default timeout**. Use `AbortSignal.timeout(ms)`.

Retries help with blips, and they can also **amplify** an outage:
- If each layer retries 3 times and there are 3 layers, one user request can become 3³ = **27** calls to the bottom service, just when it's struggling. That's a **retry storm**.
- Retry at **one** layer (usually the outermost one that can), with **exponential backoff and jitter**, and only for idempotent operations or with idempotency keys.
- Use a **retry budget**: for example, retries may add at most 10% extra load.
- **Deadlines** propagate: if the user's request has 2 s left, don't start a 5 s downstream call.

A **circuit breaker** stops calling a dependency that's clearly failing (it fails fast for a while, then tests it again), so you don't keep piling load onto it.
