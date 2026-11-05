---
slug: "sd06-fanout-tail-24"
title: "Design Drill: Tail latency under fan-out #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **22** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","0.09091%","88%","35.88%"],"answer":3,"explanation":"1 − (1 − 0.02)^22 ≈ 35.88%."},{"prompt":"A page calls **45** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["36.38%","0.02222%","90%","1%"],"answer":0,"explanation":"1 − (1 − 0.01)^45 ≈ 36.38%."},{"prompt":"A page calls **65** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.07692%","96.44%","650%","5%"],"answer":1,"explanation":"1 − (1 − 0.05)^65 ≈ 96.44%."},{"prompt":"A page calls **29** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","58%","25.28%","0.03448%"],"answer":2,"explanation":"1 − (1 − 0.01)^29 ≈ 25.28%."},{"prompt":"A page calls **8** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","1.6%","0.7972%","0.0125%"],"answer":2,"explanation":"1 − (1 − 0.001)^8 ≈ 0.7972%."}]
---
# Design Drill: Tail latency under fan-out #24

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
