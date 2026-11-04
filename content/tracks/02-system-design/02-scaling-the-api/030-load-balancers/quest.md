---
slug: "sd-load-balancers"
title: "Load Balancers"
type: "quiz"
xp: 15
questions: [{"prompt": "Request durations vary a lot (some take 5 s). Which algorithm balances best?", "options": ["Round robin", "Least connections", "Random"], "answer": 1}, {"prompt": "What is a readiness check for?", "options": ["Restarting crashed processes", "Telling the balancer whether an instance can take traffic right now", "Measuring latency"], "answer": 1}, {"prompt": "Why avoid sticky sessions when you can?", "options": ["They are slower", "They hide statefulness bugs and can unbalance load", "Browsers do not support them"], "answer": 1}, {"prompt": "Why does an Express app behind a proxy set `trust proxy`?", "options": ["To enable HTTPS", "To read the real client IP and protocol from X-Forwarded-* headers", "To allow CORS"], "answer": 1}, {"prompt": "What can a layer 7 load balancer do that a layer 4 one cannot?", "options": ["Route by URL path and terminate TLS", "Forward TCP packets", "Nothing"], "answer": 0}]
---
# Load Balancers

A **load balancer** spreads incoming requests across healthy instances.

### Algorithms

- **Round robin**: each instance in turn. Simple, and fine when requests are similar.
- **Least connections**: send to the least busy instance. Better when request times vary a lot.
- **Hashing** (by IP or user): the same client goes to the same instance (*sticky sessions*). Avoid it if you can, since it hides statefulness bugs and balances badly.

### Health checks

The balancer regularly calls something like `GET /api/health`. Failing instances are taken out of rotation. Distinguish:

- **Liveness**: "is the process alive?" If not, restart it.
- **Readiness**: "can it serve traffic right now?" During startup or DB outages, stop sending requests, but don't kill it.

### Layer 4 vs Layer 7

L4 balancers route TCP connections. L7 (HTTP) balancers can route by path (`/api` → API, `/` → static site), terminate TLS, and add headers like `X-Forwarded-For`. That's why this app calls `app.set('trust proxy', 1)`: it needs to read the client's real IP from that header.
