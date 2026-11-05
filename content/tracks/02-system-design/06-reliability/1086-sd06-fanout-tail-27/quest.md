---
slug: "sd06-fanout-tail-27"
title: "Design Drill: Tail latency under fan-out #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **36** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["84.22%","360%","0.1389%","5%"],"answer":0,"explanation":"1 − (1 − 0.05)^36 ≈ 84.22%."},{"prompt":"A page calls **69** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["29.24%","69%","0.5%","0.007246%"],"answer":0,"explanation":"1 − (1 − 0.005)^69 ≈ 29.24%."},{"prompt":"A page calls **57** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","94.63%","0.08772%","570%"],"answer":1,"explanation":"1 − (1 − 0.05)^57 ≈ 94.63%."},{"prompt":"A page calls **54** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["93.73%","540%","0.09259%","5%"],"answer":0,"explanation":"1 − (1 − 0.05)^54 ≈ 93.73%."},{"prompt":"A page calls **11** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.1818%","19.93%","44%","2%"],"answer":1,"explanation":"1 − (1 − 0.02)^11 ≈ 19.93%."}]
---
# Design Drill: Tail latency under fan-out #27

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
