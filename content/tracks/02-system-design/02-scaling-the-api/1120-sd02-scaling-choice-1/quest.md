---
slug: "sd02-scaling-choice-1"
title: "Design Drill: Which scaling move? #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**Symptom:** CPU is at 20%, but requests wait for database connections. What's the best first move?","options":["Move sessions to a shared store (or stateless tokens)","Fix slow queries and indexes, and size the pool or add a pooler","Serve static assets from a CDN","Add instances (scale out) behind the load balancer"],"answer":1},{"prompt":"**Symptom:** Half of all requests are for images and the JS bundle. What's the best first move?","options":["Add instances (scale out) behind the load balancer","Fix slow queries and indexes, and size the pool or add a pooler","Move sessions to a shared store (or stateless tokens)","Serve static assets from a CDN"],"answer":3},{"prompt":"**Symptom:** One endpoint resizes images inside the request and blocks the event loop. What's the best first move?","options":["Fix slow queries and indexes, and size the pool or add a pooler","Add instances (scale out) behind the load balancer","Serve static assets from a CDN","Move the work to a background job or worker thread"],"answer":3},{"prompt":"**Symptom:** Users are randomly logged out after scaling to 3 instances. What's the best first move?","options":["Move sessions to a shared store (or stateless tokens)","Serve static assets from a CDN","Fix slow queries and indexes, and size the pool or add a pooler","Add instances (scale out) behind the load balancer"],"answer":0},{"prompt":"**Symptom:** Reads dominate and the primary database is overloaded. What's the best first move?","options":["Add instances (scale out) behind the load balancer","Serve static assets from a CDN","Fix slow queries and indexes, and size the pool or add a pooler","Add read replicas and cache hot reads"],"answer":3}]
---
# Design Drill: Which scaling move? #1

Before adding machines, find the bottleneck: CPU-bound work, database load, slow dependencies and static assets each need a different fix.
