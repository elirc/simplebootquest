---
slug: "sd06-fanout-tail-53"
title: "Design Drill: Tail latency under fan-out #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **81** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.02469%","2%","80.53%","324%"],"answer":2,"explanation":"1 − (1 − 0.02)^81 ≈ 80.53%."},{"prompt":"A page calls **40** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","0.0125%","40%","18.17%"],"answer":3,"explanation":"1 − (1 − 0.005)^40 ≈ 18.17%."},{"prompt":"A page calls **13** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.1538%","52%","23.1%","2%"],"answer":2,"explanation":"1 − (1 − 0.02)^13 ≈ 23.1%."},{"prompt":"A page calls **50** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.02%","39.5%","100%","1%"],"answer":1,"explanation":"1 − (1 − 0.01)^50 ≈ 39.5%."},{"prompt":"A page calls **95** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","95%","37.89%","0.005263%"],"answer":2,"explanation":"1 − (1 − 0.005)^95 ≈ 37.89%."}]
---
# Design Drill: Tail latency under fan-out #53

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
