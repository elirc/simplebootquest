---
slug: "sd06-fanout-tail-1"
title: "Design Drill: Tail latency under fan-out #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **63** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.01587%","126%","1%","46.91%"],"answer":3,"explanation":"1 − (1 − 0.01)^63 ≈ 46.91%."},{"prompt":"A page calls **40** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","0.05%","55.43%","160%"],"answer":2,"explanation":"1 − (1 − 0.02)^40 ≈ 55.43%."},{"prompt":"A page calls **89** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","89%","35.99%","0.005618%"],"answer":2,"explanation":"1 − (1 − 0.005)^89 ≈ 35.99%."},{"prompt":"A page calls **66** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["264%","0.0303%","2%","73.64%"],"answer":3,"explanation":"1 − (1 − 0.02)^66 ≈ 73.64%."},{"prompt":"A page calls **44** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.01136%","19.79%","0.5%","44%"],"answer":1,"explanation":"1 − (1 − 0.005)^44 ≈ 19.79%."}]
---
# Design Drill: Tail latency under fan-out #1

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
