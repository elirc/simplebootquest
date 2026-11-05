---
slug: "sd06-fanout-tail-30"
title: "Design Drill: Tail latency under fan-out #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **41** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","87.79%","410%","0.122%"],"answer":1,"explanation":"1 − (1 − 0.05)^41 ≈ 87.79%."},{"prompt":"A page calls **57** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","24.85%","57%","0.008772%"],"answer":1,"explanation":"1 − (1 − 0.005)^57 ≈ 24.85%."},{"prompt":"A page calls **83** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["830%","0.06024%","5%","98.58%"],"answer":3,"explanation":"1 − (1 − 0.05)^83 ≈ 98.58%."},{"prompt":"A page calls **18** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["30.49%","2%","0.1111%","72%"],"answer":0,"explanation":"1 − (1 − 0.02)^18 ≈ 30.49%."},{"prompt":"A page calls **10** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","2%","0.01%","0.9955%"],"answer":3,"explanation":"1 − (1 − 0.001)^10 ≈ 0.9955%."}]
---
# Design Drill: Tail latency under fan-out #30

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
