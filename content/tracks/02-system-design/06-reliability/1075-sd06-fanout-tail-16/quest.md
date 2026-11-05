---
slug: "sd06-fanout-tail-16"
title: "Design Drill: Tail latency under fan-out #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **24** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","21.43%","48%","0.04167%"],"answer":1,"explanation":"1 − (1 − 0.01)^24 ≈ 21.43%."},{"prompt":"A page calls **100** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.02%","400%","2%","86.74%"],"answer":3,"explanation":"1 − (1 − 0.02)^100 ≈ 86.74%."},{"prompt":"A page calls **70** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["6.764%","0.1%","14%","0.001429%"],"answer":0,"explanation":"1 − (1 − 0.001)^70 ≈ 6.764%."},{"prompt":"A page calls **13** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.007692%","2.6%","1.292%","0.1%"],"answer":2,"explanation":"1 − (1 − 0.001)^13 ≈ 1.292%."},{"prompt":"A page calls **25** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.08%","2%","39.65%","100%"],"answer":2,"explanation":"1 − (1 − 0.02)^25 ≈ 39.65%."}]
---
# Design Drill: Tail latency under fan-out #16

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
