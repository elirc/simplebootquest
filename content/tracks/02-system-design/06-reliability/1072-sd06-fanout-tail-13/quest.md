---
slug: "sd06-fanout-tail-13"
title: "Design Drill: Tail latency under fan-out #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **30** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["13.96%","0.5%","30%","0.01667%"],"answer":0,"explanation":"1 − (1 − 0.005)^30 ≈ 13.96%."},{"prompt":"A page calls **45** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["450%","90.06%","0.1111%","5%"],"answer":1,"explanation":"1 − (1 − 0.05)^45 ≈ 90.06%."},{"prompt":"A page calls **64** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["27.44%","0.5%","64%","0.007813%"],"answer":0,"explanation":"1 − (1 − 0.005)^64 ≈ 27.44%."},{"prompt":"A page calls **99** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["396%","86.47%","0.0202%","2%"],"answer":1,"explanation":"1 − (1 − 0.02)^99 ≈ 86.47%."},{"prompt":"A page calls **37** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.02703%","1%","74%","31.06%"],"answer":3,"explanation":"1 − (1 − 0.01)^37 ≈ 31.06%."}]
---
# Design Drill: Tail latency under fan-out #13

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
