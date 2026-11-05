---
slug: "sd06-fanout-tail-18"
title: "Design Drill: Tail latency under fan-out #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **69** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","50.02%","0.01449%","138%"],"answer":1,"explanation":"1 − (1 − 0.01)^69 ≈ 50.02%."},{"prompt":"A page calls **22** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.02273%","0.5%","22%","10.44%"],"answer":3,"explanation":"1 − (1 − 0.005)^22 ≈ 10.44%."},{"prompt":"A page calls **19** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","76%","31.88%","0.1053%"],"answer":2,"explanation":"1 − (1 − 0.02)^19 ≈ 31.88%."},{"prompt":"A page calls **32** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["128%","47.61%","2%","0.0625%"],"answer":1,"explanation":"1 − (1 − 0.02)^32 ≈ 47.61%."},{"prompt":"A page calls **5** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.1%","0.5%","5%","2.475%"],"answer":3,"explanation":"1 − (1 − 0.005)^5 ≈ 2.475%."}]
---
# Design Drill: Tail latency under fan-out #18

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
