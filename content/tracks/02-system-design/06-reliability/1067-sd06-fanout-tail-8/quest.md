---
slug: "sd06-fanout-tail-8"
title: "Design Drill: Tail latency under fan-out #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **62** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["26.71%","62%","0.5%","0.008065%"],"answer":0,"explanation":"1 − (1 − 0.005)^62 ≈ 26.71%."},{"prompt":"A page calls **80** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","0.025%","320%","80.14%"],"answer":3,"explanation":"1 − (1 − 0.02)^80 ≈ 80.14%."},{"prompt":"A page calls **67** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.001493%","6.484%","0.1%","13.4%"],"answer":1,"explanation":"1 − (1 − 0.001)^67 ≈ 6.484%."},{"prompt":"A page calls **11** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.09091%","1%","10.47%","22%"],"answer":2,"explanation":"1 − (1 − 0.01)^11 ≈ 10.47%."},{"prompt":"A page calls **27** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["5.4%","0.1%","2.665%","0.003704%"],"answer":2,"explanation":"1 − (1 − 0.001)^27 ≈ 2.665%."}]
---
# Design Drill: Tail latency under fan-out #8

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
