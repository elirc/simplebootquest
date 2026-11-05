---
slug: "sd06-fanout-tail-25"
title: "Design Drill: Tail latency under fan-out #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **16** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.3125%","55.99%","5%","160%"],"answer":1,"explanation":"1 − (1 − 0.05)^16 ≈ 55.99%."},{"prompt":"A page calls **7** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.6979%","1.4%","0.01429%","0.1%"],"answer":0,"explanation":"1 − (1 − 0.001)^7 ≈ 0.6979%."},{"prompt":"A page calls **46** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","20.59%","0.01087%","46%"],"answer":1,"explanation":"1 − (1 − 0.005)^46 ≈ 20.59%."},{"prompt":"A page calls **81** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["98.43%","5%","810%","0.06173%"],"answer":0,"explanation":"1 − (1 − 0.05)^81 ≈ 98.43%."},{"prompt":"A page calls **42** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","168%","0.04762%","57.19%"],"answer":3,"explanation":"1 − (1 − 0.02)^42 ≈ 57.19%."}]
---
# Design Drill: Tail latency under fan-out #25

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
