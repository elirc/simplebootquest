---
slug: "sd-q-node-concurrency"
title: "Concurrency Models for Node"
type: "quiz"
xp: 15
questions: [{"prompt": "Your container has 4 vCPUs and runs one Node process. How much of the CPU can it use for JavaScript?", "options": ["All 4 cores", "About one core", "None"], "answer": 1}, {"prompt": "Where should you run CPU-heavy image resizing?", "options": ["In the request handler", "In a worker thread or a background job, off the request path", "In the browser of an admin"], "answer": 1}, {"prompt": "After scaling to 3 instances, users are logged out at random. Why?", "options": ["Cookies are broken", "Sessions were stored in process memory, and each instance has its own", "The load balancer is down"], "answer": 1}, {"prompt": "What is the usual way to scale a Node API in a cloud platform?", "options": ["One giant process", "Run several identical stateless instances behind a load balancer", "Rewrite it in Go"], "answer": 1}, {"prompt": "A rate limiter uses an in-memory Map. With 4 instances behind round-robin load balancing, the effective limit becomes…", "options": ["The same", "Up to 4× higher, because each instance counts separately", "Zero"], "answer": 1}]
---
# Concurrency Models for Node

One Node process runs your JavaScript on **one CPU core**. To use a whole machine, or many machines, you have several options:

| Option | What it is | Use for |
|--------|-----------|---------|
| Multiple **containers/instances** behind a load balancer | One process each, scaled by the platform | The default in the cloud |
| `node:cluster` / PM2 cluster mode | Several processes on one machine sharing a port | A single VM with many cores |
| `worker_threads` | Threads inside one process with message passing | CPU-heavy tasks (image resizing, parsing) |
| A **job queue** + worker processes | Separate processes pulling work | Slow or retryable background work |

Because processes don't share memory, **in-memory state** (sessions, rate-limit counters, caches) is no longer shared once you run more than one. That's why "stateless" matters (see the earlier lesson).

Don't block the event loop: a 200 ms synchronous task stalls *every* request on that process for 200 ms.
