---
slug: "sd-q-bottlenecks"
title: "Finding the Bottleneck"
type: "quiz"
xp: 15
questions: [{"prompt": "Requests take 100 ms on average and you serve 300 req/s. How many requests are in flight on average?", "options": ["3", "30", "300", "3,000"], "answer": 1}, {"prompt": "90% of request time is in the database. You make the JavaScript 2× faster. Roughly how much faster are requests?", "options": ["2×", "About 5% faster", "50% faster"], "answer": 1}, {"prompt": "p95 latency jumps when traffic rises, but CPU stays at 20%. A likely culprit?", "options": ["CPU", "Requests are waiting for a connection from a too-small database pool (or for a slow downstream)", "The disk is full"], "answer": 1}, {"prompt": "What should you do before optimising?", "options": ["Rewrite in Rust", "Measure: profile, look at traces, and find where the time goes", "Add a cache everywhere"], "answer": 1}, {"prompt": "A list endpoint returns 5 MB of JSON. What are the first fixes?", "options": ["Bigger servers", "Paginate, select fewer fields, and enable compression", "Switch to GraphQL"], "answer": 1}]
---
# Finding the Bottleneck

A system is only as fast as its **narrowest point**. Scaling anything else is wasted money.

**Little's Law**: `concurrency = throughput × latency`. If each request takes 200 ms and you serve 500 req/s, then on average 500 × 0.2 = **100 requests are in flight**. If your database pool allows only 20 connections, requests will queue there, and that's your bottleneck.

**Amdahl's Law**: if 80% of a request's time is waiting on the database, making the Node code twice as fast saves only 10%. Measure first, then optimise the biggest slice.

Typical bottlenecks in a CRUD app, roughly in order of how often you'll hit them:
1. Missing database indexes, and N+1 queries.
2. The connection pool size versus the number of instances.
3. Synchronous CPU work on the event loop (bcrypt, big JSON, image processing).
4. Slow third-party calls made **inside** the request.
5. Network bandwidth for large responses (no pagination, no compression).
