---
slug: "sd06-fanout-tail-32"
title: "Design Drill: Tail latency under fan-out #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **20** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.25%","200%","5%","64.15%"],"answer":3,"explanation":"1 − (1 − 0.05)^20 ≈ 64.15%."},{"prompt":"A page calls **96** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["9.158%","0.1%","19.2%","0.001042%"],"answer":0,"explanation":"1 − (1 − 0.001)^96 ≈ 9.158%."},{"prompt":"A page calls **18** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.005556%","0.1%","3.6%","1.785%"],"answer":3,"explanation":"1 − (1 − 0.001)^18 ≈ 1.785%."},{"prompt":"A page calls **94** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","0.02128%","376%","85.03%"],"answer":3,"explanation":"1 − (1 − 0.02)^94 ≈ 85.03%."},{"prompt":"A page calls **95** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.05263%","5%","950%","99.23%"],"answer":3,"explanation":"1 − (1 − 0.05)^95 ≈ 99.23%."}]
---
# Design Drill: Tail latency under fan-out #32

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
