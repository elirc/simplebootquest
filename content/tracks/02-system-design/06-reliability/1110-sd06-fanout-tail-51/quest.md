---
slug: "sd06-fanout-tail-51"
title: "Design Drill: Tail latency under fan-out #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **76** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["304%","2%","78.46%","0.02632%"],"answer":2,"explanation":"1 − (1 − 0.02)^76 ≈ 78.46%."},{"prompt":"A page calls **26** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.03846%","23%","52%","1%"],"answer":1,"explanation":"1 − (1 − 0.01)^26 ≈ 23%."},{"prompt":"A page calls **12** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["45.96%","120%","5%","0.4167%"],"answer":0,"explanation":"1 − (1 − 0.05)^12 ≈ 45.96%."},{"prompt":"A page calls **6** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["5.852%","1%","12%","0.1667%"],"answer":0,"explanation":"1 − (1 − 0.01)^6 ≈ 5.852%."},{"prompt":"A page calls **38** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["17.34%","0.01316%","0.5%","38%"],"answer":0,"explanation":"1 − (1 − 0.005)^38 ≈ 17.34%."}]
---
# Design Drill: Tail latency under fan-out #51

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
