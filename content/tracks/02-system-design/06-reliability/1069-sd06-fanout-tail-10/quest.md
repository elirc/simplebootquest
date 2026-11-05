---
slug: "sd06-fanout-tail-10"
title: "Design Drill: Tail latency under fan-out #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **36** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["30.36%","72%","1%","0.02778%"],"answer":0,"explanation":"1 − (1 − 0.01)^36 ≈ 30.36%."},{"prompt":"A page calls **54** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.009259%","54%","0.5%","23.71%"],"answer":3,"explanation":"1 − (1 − 0.005)^54 ≈ 23.71%."},{"prompt":"A page calls **90** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["83.77%","360%","0.02222%","2%"],"answer":0,"explanation":"1 − (1 − 0.02)^90 ≈ 83.77%."},{"prompt":"A page calls **97** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["99.31%","0.05155%","5%","970%"],"answer":0,"explanation":"1 − (1 − 0.05)^97 ≈ 99.31%."},{"prompt":"A page calls **21** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.09524%","34.57%","2%","84%"],"answer":1,"explanation":"1 − (1 − 0.02)^21 ≈ 34.57%."}]
---
# Design Drill: Tail latency under fan-out #10

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
