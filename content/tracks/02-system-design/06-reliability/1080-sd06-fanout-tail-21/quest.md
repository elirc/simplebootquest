---
slug: "sd06-fanout-tail-21"
title: "Design Drill: Tail latency under fan-out #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **38** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","85.76%","380%","0.1316%"],"answer":1,"explanation":"1 − (1 − 0.05)^38 ≈ 85.76%."},{"prompt":"A page calls **87** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["82.75%","0.02299%","348%","2%"],"answer":0,"explanation":"1 − (1 − 0.02)^87 ≈ 82.75%."},{"prompt":"A page calls **42** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["8.4%","0.002381%","0.1%","4.115%"],"answer":3,"explanation":"1 − (1 − 0.001)^42 ≈ 4.115%."},{"prompt":"A page calls **76** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["152%","53.41%","1%","0.01316%"],"answer":1,"explanation":"1 − (1 − 0.01)^76 ≈ 53.41%."},{"prompt":"A page calls **100** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","9.521%","0.001%","20%"],"answer":1,"explanation":"1 − (1 − 0.001)^100 ≈ 9.521%."}]
---
# Design Drill: Tail latency under fan-out #21

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
