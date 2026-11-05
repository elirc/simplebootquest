---
slug: "sd06-fanout-tail-7"
title: "Design Drill: Tail latency under fan-out #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **21** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["21%","0.5%","0.02381%","9.991%"],"answer":3,"explanation":"1 − (1 − 0.005)^21 ≈ 9.991%."},{"prompt":"A page calls **85** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["85%","0.005882%","0.5%","34.69%"],"answer":3,"explanation":"1 − (1 − 0.005)^85 ≈ 34.69%."},{"prompt":"A page calls **58** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["69.02%","2%","0.03448%","232%"],"answer":0,"explanation":"1 − (1 − 0.02)^58 ≈ 69.02%."},{"prompt":"A page calls **17** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["29.07%","68%","2%","0.1176%"],"answer":0,"explanation":"1 − (1 − 0.02)^17 ≈ 29.07%."},{"prompt":"A page calls **28** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","112%","0.07143%","43.2%"],"answer":3,"explanation":"1 − (1 − 0.02)^28 ≈ 43.2%."}]
---
# Design Drill: Tail latency under fan-out #7

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
