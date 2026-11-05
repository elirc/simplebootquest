---
slug: "sd06-fanout-tail-5"
title: "Design Drill: Tail latency under fan-out #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **11** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.04545%","11%","5.365%","0.5%"],"answer":2,"explanation":"1 − (1 − 0.005)^11 ≈ 5.365%."},{"prompt":"A page calls **84** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","0.0119%","168%","57.01%"],"answer":3,"explanation":"1 − (1 − 0.01)^84 ≈ 57.01%."},{"prompt":"A page calls **7** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["28%","2%","0.2857%","13.19%"],"answer":3,"explanation":"1 − (1 − 0.02)^7 ≈ 13.19%."},{"prompt":"A page calls **2** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","0.25%","0.9975%","2%"],"answer":2,"explanation":"1 − (1 − 0.005)^2 ≈ 0.9975%."},{"prompt":"A page calls **2** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","3.96%","8%","1%"],"answer":1,"explanation":"1 − (1 − 0.02)^2 ≈ 3.96%."}]
---
# Design Drill: Tail latency under fan-out #5

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
