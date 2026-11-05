---
slug: "sd06-fanout-tail-28"
title: "Design Drill: Tail latency under fan-out #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **84** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["84%","0.005952%","0.5%","34.36%"],"answer":3,"explanation":"1 − (1 − 0.005)^84 ≈ 34.36%."},{"prompt":"A page calls **28** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["56%","0.03571%","1%","24.53%"],"answer":3,"explanation":"1 − (1 − 0.01)^28 ≈ 24.53%."},{"prompt":"A page calls **87** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","0.001149%","17.4%","8.336%"],"answer":3,"explanation":"1 − (1 − 0.001)^87 ≈ 8.336%."},{"prompt":"A page calls **27** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["42.04%","2%","0.07407%","108%"],"answer":0,"explanation":"1 − (1 − 0.02)^27 ≈ 42.04%."},{"prompt":"A page calls **40** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.0025%","0.1%","3.923%","8%"],"answer":2,"explanation":"1 − (1 − 0.001)^40 ≈ 3.923%."}]
---
# Design Drill: Tail latency under fan-out #28

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
