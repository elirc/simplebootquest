---
slug: "sd06-fanout-tail-54"
title: "Design Drill: Tail latency under fan-out #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **52** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","22.95%","0.009615%","52%"],"answer":1,"explanation":"1 − (1 − 0.005)^52 ≈ 22.95%."},{"prompt":"A page calls **76** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.06579%","760%","97.97%","5%"],"answer":2,"explanation":"1 − (1 − 0.05)^76 ≈ 97.97%."},{"prompt":"A page calls **19** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["1.883%","3.8%","0.1%","0.005263%"],"answer":0,"explanation":"1 − (1 − 0.001)^19 ≈ 1.883%."},{"prompt":"A page calls **92** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["60.33%","1%","184%","0.01087%"],"answer":0,"explanation":"1 − (1 − 0.01)^92 ≈ 60.33%."},{"prompt":"A page calls **4** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","1.985%","4%","0.125%"],"answer":1,"explanation":"1 − (1 − 0.005)^4 ≈ 1.985%."}]
---
# Design Drill: Tail latency under fan-out #54

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
