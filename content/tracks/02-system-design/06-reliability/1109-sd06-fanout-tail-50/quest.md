---
slug: "sd06-fanout-tail-50"
title: "Design Drill: Tail latency under fan-out #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **20** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","0.025%","20%","9.539%"],"answer":3,"explanation":"1 − (1 − 0.005)^20 ≈ 9.539%."},{"prompt":"A page calls **12** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","1.193%","2.4%","0.008333%"],"answer":1,"explanation":"1 − (1 − 0.001)^12 ≈ 1.193%."},{"prompt":"A page calls **70** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.01429%","1%","50.52%","140%"],"answer":2,"explanation":"1 − (1 − 0.01)^70 ≈ 50.52%."},{"prompt":"A page calls **90** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.005556%","90%","36.31%","0.5%"],"answer":2,"explanation":"1 − (1 − 0.005)^90 ≈ 36.31%."},{"prompt":"A page calls **3** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["14.26%","5%","30%","1.667%"],"answer":0,"explanation":"1 − (1 − 0.05)^3 ≈ 14.26%."}]
---
# Design Drill: Tail latency under fan-out #50

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
