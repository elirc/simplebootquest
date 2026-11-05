---
slug: "sd06-fanout-tail-48"
title: "Design Drill: Tail latency under fan-out #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **14** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["140%","0.3571%","5%","51.23%"],"answer":3,"explanation":"1 − (1 − 0.05)^14 ≈ 51.23%."},{"prompt":"A page calls **80** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["98.35%","5%","0.0625%","800%"],"answer":0,"explanation":"1 − (1 − 0.05)^80 ≈ 98.35%."},{"prompt":"A page calls **22** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["67.65%","5%","220%","0.2273%"],"answer":0,"explanation":"1 − (1 − 0.05)^22 ≈ 67.65%."},{"prompt":"A page calls **48** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.002083%","4.689%","0.1%","9.6%"],"answer":1,"explanation":"1 − (1 − 0.001)^48 ≈ 4.689%."},{"prompt":"A page calls **44** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.04545%","2%","176%","58.89%"],"answer":3,"explanation":"1 − (1 − 0.02)^44 ≈ 58.89%."}]
---
# Design Drill: Tail latency under fan-out #48

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
