---
slug: "sd-distributed-rate-limiting"
title: "Rate Limiting at Scale"
type: "quiz"
xp: 15
resources: [{"title": "Cloudflare: Counting things at scale", "url": "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/"}, {"title": "IETF RateLimit headers draft", "url": "https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/"}]
questions: [{"prompt": "Why does an in-memory limiter break with multiple instances?", "options": ["Memory is slow", "Each instance has its own counters, so the real limit is multiplied", "It is not thread-safe"], "answer": 1}, {"prompt": "Which algorithm naturally allows controlled bursts?", "options": ["Fixed window", "Token bucket", "No limit"], "answer": 1}, {"prompt": "What should a rate-limited response include?", "options": ["200 OK with an error field", "429 status and a Retry-After header", "500 status"], "answer": 1}, {"prompt": "Why rate-limit login per account as well as per IP?", "options": ["IPs are expensive", "Attackers rotate IPs, but per-account limits still stop guessing against one user", "It is faster"], "answer": 1}, {"prompt": "If Redis (the limiter store) is down, failing OPEN means…", "options": ["Blocking all requests", "Allowing requests through without limits, staying available but unprotected", "Restarting Redis"], "answer": 1}]
---
# Rate Limiting at Scale

In the Auth chapter you built a sliding-window limiter **in memory**. With 5 API instances, each counts separately. You need **shared state**, usually Redis.

### Algorithms

- **Fixed window**: a counter per minute. Simple, but allows bursts of up to 2× at window boundaries.
- **Sliding window log**: exact, but stores one entry per request.
- **Sliding window counter**: a weighted mix of the current and previous windows. A good balance.
- **Token bucket**: tokens refill at a steady rate and each request spends one, which allows controlled bursts. Used by many public APIs.

### Design decisions

- **What's the key?** IP (for anonymous traffic, but shared NATs hurt), user id, API key, or a combination.
- **Different limits per endpoint**: login 10/min, reads 1,000/min, expensive exports 5/hour.
- Return **429** with a `Retry-After` header and the standard `RateLimit-*` headers, so well-behaved clients can back off.
- **Fail open or closed?** If Redis is down, do you allow all requests (fail open: available, but unprotected) or block them (fail closed)? Usually you fail open for reads and closed for auth.
