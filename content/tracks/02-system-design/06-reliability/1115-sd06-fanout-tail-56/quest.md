---
slug: "sd06-fanout-tail-56"
title: "Design Drill: Tail latency under fan-out #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **22** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["19.84%","1%","0.04545%","44%"],"answer":0,"explanation":"1 − (1 − 0.01)^22 ≈ 19.84%."},{"prompt":"A page calls **35** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.02857%","1%","70%","29.66%"],"answer":3,"explanation":"1 − (1 − 0.01)^35 ≈ 29.66%."},{"prompt":"A page calls **39** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["390%","86.47%","5%","0.1282%"],"answer":1,"explanation":"1 − (1 − 0.05)^39 ≈ 86.47%."},{"prompt":"A page calls **10** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.2%","18.29%","2%","40%"],"answer":1,"explanation":"1 − (1 − 0.02)^10 ≈ 18.29%."},{"prompt":"A page calls **30** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["2.957%","0.003333%","0.1%","6%"],"answer":0,"explanation":"1 − (1 − 0.001)^30 ≈ 2.957%."}]
---
# Design Drill: Tail latency under fan-out #56

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
