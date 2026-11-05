---
slug: "sd06-fanout-tail-38"
title: "Design Drill: Tail latency under fan-out #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **95** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.001053%","0.1%","9.067%","19%"],"answer":2,"explanation":"1 − (1 − 0.001)^95 ≈ 9.067%."},{"prompt":"A page calls **42** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","420%","88.4%","0.119%"],"answer":2,"explanation":"1 − (1 − 0.05)^42 ≈ 88.4%."},{"prompt":"A page calls **45** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["20.19%","0.5%","45%","0.01111%"],"answer":0,"explanation":"1 − (1 − 0.005)^45 ≈ 20.19%."},{"prompt":"A page calls **19** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.2632%","190%","5%","62.26%"],"answer":3,"explanation":"1 − (1 − 0.05)^19 ≈ 62.26%."},{"prompt":"A page calls **61** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.03279%","70.84%","2%","244%"],"answer":1,"explanation":"1 − (1 − 0.02)^61 ≈ 70.84%."}]
---
# Design Drill: Tail latency under fan-out #38

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
