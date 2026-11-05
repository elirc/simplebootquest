---
slug: "sd06-fanout-tail-3"
title: "Design Drill: Tail latency under fan-out #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **26** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["12.22%","26%","0.01923%","0.5%"],"answer":0,"explanation":"1 − (1 − 0.005)^26 ≈ 12.22%."},{"prompt":"A page calls **71** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["29.95%","0.007042%","71%","0.5%"],"answer":0,"explanation":"1 − (1 − 0.005)^71 ≈ 29.95%."},{"prompt":"A page calls **94** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","0.005319%","94%","37.57%"],"answer":3,"explanation":"1 − (1 − 0.005)^94 ≈ 37.57%."},{"prompt":"A page calls **58** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["116%","44.17%","0.01724%","1%"],"answer":1,"explanation":"1 − (1 − 0.01)^58 ≈ 44.17%."},{"prompt":"A page calls **59** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.001695%","11.8%","0.1%","5.732%"],"answer":3,"explanation":"1 − (1 − 0.001)^59 ≈ 5.732%."}]
---
# Design Drill: Tail latency under fan-out #3

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
