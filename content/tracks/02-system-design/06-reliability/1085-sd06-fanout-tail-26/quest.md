---
slug: "sd06-fanout-tail-26"
title: "Design Drill: Tail latency under fan-out #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **99** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["990%","5%","99.38%","0.05051%"],"answer":2,"explanation":"1 − (1 − 0.05)^99 ≈ 99.38%."},{"prompt":"A page calls **63** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.007937%","0.5%","63%","27.08%"],"answer":3,"explanation":"1 − (1 − 0.005)^63 ≈ 27.08%."},{"prompt":"A page calls **59** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.08475%","95.15%","590%","5%"],"answer":1,"explanation":"1 − (1 − 0.05)^59 ≈ 95.15%."},{"prompt":"A page calls **33** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["15.25%","0.5%","0.01515%","33%"],"answer":0,"explanation":"1 − (1 − 0.005)^33 ≈ 15.25%."},{"prompt":"A page calls **68** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","0.001471%","13.6%","6.577%"],"answer":3,"explanation":"1 − (1 − 0.001)^68 ≈ 6.577%."}]
---
# Design Drill: Tail latency under fan-out #26

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
