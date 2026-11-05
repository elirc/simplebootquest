---
slug: "sd06-fanout-tail-41"
title: "Design Drill: Tail latency under fan-out #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **73** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","0.0274%","292%","77.12%"],"answer":3,"explanation":"1 − (1 − 0.02)^73 ≈ 77.12%."},{"prompt":"A page calls **24** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.004167%","2.373%","0.1%","4.8%"],"answer":1,"explanation":"1 − (1 − 0.001)^24 ≈ 2.373%."},{"prompt":"A page calls **7** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["30.17%","0.7143%","70%","5%"],"answer":0,"explanation":"1 − (1 − 0.05)^7 ≈ 30.17%."},{"prompt":"A page calls **58** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["58%","0.5%","25.23%","0.008621%"],"answer":2,"explanation":"1 − (1 − 0.005)^58 ≈ 25.23%."},{"prompt":"A page calls **20** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["80%","2%","33.24%","0.1%"],"answer":2,"explanation":"1 − (1 − 0.02)^20 ≈ 33.24%."}]
---
# Design Drill: Tail latency under fan-out #41

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
