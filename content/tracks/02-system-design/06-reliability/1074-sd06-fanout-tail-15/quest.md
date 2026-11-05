---
slug: "sd06-fanout-tail-15"
title: "Design Drill: Tail latency under fan-out #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **20** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["4%","0.005%","1.981%","0.1%"],"answer":2,"explanation":"1 − (1 − 0.001)^20 ≈ 1.981%."},{"prompt":"A page calls **37** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["7.4%","3.634%","0.1%","0.002703%"],"answer":1,"explanation":"1 − (1 − 0.001)^37 ≈ 3.634%."},{"prompt":"A page calls **67** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","96.78%","0.07463%","670%"],"answer":1,"explanation":"1 − (1 − 0.05)^67 ≈ 96.78%."},{"prompt":"A page calls **85** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["340%","0.02353%","2%","82.04%"],"answer":3,"explanation":"1 − (1 − 0.02)^85 ≈ 82.04%."},{"prompt":"A page calls **38** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["76%","0.02632%","1%","31.74%"],"answer":3,"explanation":"1 − (1 − 0.01)^38 ≈ 31.74%."}]
---
# Design Drill: Tail latency under fan-out #15

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
