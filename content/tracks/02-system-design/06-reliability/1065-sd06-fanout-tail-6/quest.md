---
slug: "sd06-fanout-tail-6"
title: "Design Drill: Tail latency under fan-out #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **41** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","82%","0.02439%","33.77%"],"answer":3,"explanation":"1 − (1 − 0.01)^41 ≈ 33.77%."},{"prompt":"A page calls **33** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","0.1515%","81.6%","330%"],"answer":2,"explanation":"1 − (1 − 0.05)^33 ≈ 81.6%."},{"prompt":"A page calls **7** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.1429%","1%","14%","6.793%"],"answer":3,"explanation":"1 − (1 − 0.01)^7 ≈ 6.793%."},{"prompt":"A page calls **89** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["17.8%","8.52%","0.1%","0.001124%"],"answer":1,"explanation":"1 − (1 − 0.001)^89 ≈ 8.52%."},{"prompt":"A page calls **97** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.02062%","85.91%","2%","388%"],"answer":1,"explanation":"1 − (1 − 0.02)^97 ≈ 85.91%."}]
---
# Design Drill: Tail latency under fan-out #6

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
