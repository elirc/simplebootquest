---
slug: "sd06-fanout-tail-31"
title: "Design Drill: Tail latency under fan-out #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **62** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["71.42%","248%","2%","0.03226%"],"answer":0,"explanation":"1 − (1 − 0.02)^62 ≈ 71.42%."},{"prompt":"A page calls **15** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["1.49%","0.006667%","3%","0.1%"],"answer":0,"explanation":"1 − (1 − 0.001)^15 ≈ 1.49%."},{"prompt":"A page calls **69** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["276%","0.02899%","75.19%","2%"],"answer":2,"explanation":"1 − (1 − 0.02)^69 ≈ 75.19%."},{"prompt":"A page calls **46** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["90.55%","0.1087%","460%","5%"],"answer":0,"explanation":"1 − (1 − 0.05)^46 ≈ 90.55%."},{"prompt":"A page calls **24** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.2083%","70.8%","240%","5%"],"answer":1,"explanation":"1 − (1 − 0.05)^24 ≈ 70.8%."}]
---
# Design Drill: Tail latency under fan-out #31

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
