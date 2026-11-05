---
slug: "sd06-fanout-tail-12"
title: "Design Drill: Tail latency under fan-out #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **29** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.06897%","116%","2%","44.34%"],"answer":3,"explanation":"1 − (1 − 0.02)^29 ≈ 44.34%."},{"prompt":"A page calls **32** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","6.4%","3.151%","0.003125%"],"answer":2,"explanation":"1 − (1 − 0.001)^32 ≈ 3.151%."},{"prompt":"A page calls **34** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","0.02941%","68%","28.94%"],"answer":3,"explanation":"1 − (1 − 0.01)^34 ≈ 28.94%."},{"prompt":"A page calls **56** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.008929%","56%","0.5%","24.47%"],"answer":3,"explanation":"1 − (1 − 0.005)^56 ≈ 24.47%."},{"prompt":"A page calls **93** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.005376%","0.5%","37.26%","93%"],"answer":2,"explanation":"1 − (1 − 0.005)^93 ≈ 37.26%."}]
---
# Design Drill: Tail latency under fan-out #12

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
