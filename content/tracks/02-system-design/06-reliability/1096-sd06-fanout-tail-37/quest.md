---
slug: "sd06-fanout-tail-37"
title: "Design Drill: Tail latency under fan-out #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **72** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.006944%","30.3%","0.5%","72%"],"answer":1,"explanation":"1 − (1 − 0.005)^72 ≈ 30.3%."},{"prompt":"A page calls **39** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["3.827%","0.002564%","0.1%","7.8%"],"answer":0,"explanation":"1 − (1 − 0.001)^39 ≈ 3.827%."},{"prompt":"A page calls **26** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.003846%","5.2%","0.1%","2.568%"],"answer":3,"explanation":"1 − (1 − 0.001)^26 ≈ 2.568%."},{"prompt":"A page calls **42** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","42%","0.0119%","18.98%"],"answer":3,"explanation":"1 − (1 − 0.005)^42 ≈ 18.98%."},{"prompt":"A page calls **31** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["26.77%","62%","0.03226%","1%"],"answer":0,"explanation":"1 − (1 − 0.01)^31 ≈ 26.77%."}]
---
# Design Drill: Tail latency under fan-out #37

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
