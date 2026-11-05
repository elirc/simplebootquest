---
slug: "sd06-fanout-tail-43"
title: "Design Drill: Tail latency under fan-out #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **97** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["19.4%","0.001031%","9.249%","0.1%"],"answer":2,"explanation":"1 − (1 − 0.001)^97 ≈ 9.249%."},{"prompt":"A page calls **61** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["26.34%","0.5%","0.008197%","61%"],"answer":0,"explanation":"1 − (1 − 0.005)^61 ≈ 26.34%."},{"prompt":"A page calls **64** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.07813%","640%","5%","96.25%"],"answer":3,"explanation":"1 − (1 − 0.05)^64 ≈ 96.25%."},{"prompt":"A page calls **73** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["73%","30.64%","0.006849%","0.5%"],"answer":1,"explanation":"1 − (1 − 0.005)^73 ≈ 30.64%."},{"prompt":"A page calls **64** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["6.203%","12.8%","0.1%","0.001563%"],"answer":0,"explanation":"1 − (1 − 0.001)^64 ≈ 6.203%."}]
---
# Design Drill: Tail latency under fan-out #43

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
