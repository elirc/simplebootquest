---
slug: "sd06-fanout-tail-29"
title: "Design Drill: Tail latency under fan-out #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **81** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["7.784%","0.001235%","16.2%","0.1%"],"answer":0,"explanation":"1 − (1 − 0.001)^81 ≈ 7.784%."},{"prompt":"A page calls **74** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.06757%","97.75%","5%","740%"],"answer":1,"explanation":"1 − (1 − 0.05)^74 ≈ 97.75%."},{"prompt":"A page calls **87** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","87%","0.005747%","35.34%"],"answer":3,"explanation":"1 − (1 − 0.005)^87 ≈ 35.34%."},{"prompt":"A page calls **87** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["58.29%","1%","0.01149%","174%"],"answer":0,"explanation":"1 − (1 − 0.01)^87 ≈ 58.29%."},{"prompt":"A page calls **99** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.00101%","0.1%","9.43%","19.8%"],"answer":2,"explanation":"1 − (1 − 0.001)^99 ≈ 9.43%."}]
---
# Design Drill: Tail latency under fan-out #29

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
