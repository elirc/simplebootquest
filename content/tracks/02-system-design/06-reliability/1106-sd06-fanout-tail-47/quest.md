---
slug: "sd06-fanout-tail-47"
title: "Design Drill: Tail latency under fan-out #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **65** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["73.1%","2%","0.03077%","260%"],"answer":0,"explanation":"1 − (1 − 0.02)^65 ≈ 73.1%."},{"prompt":"A page calls **36** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","7.2%","0.002778%","3.538%"],"answer":3,"explanation":"1 − (1 − 0.001)^36 ≈ 3.538%."},{"prompt":"A page calls **3** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["2.97%","0.3333%","6%","1%"],"answer":0,"explanation":"1 − (1 − 0.01)^3 ≈ 2.97%."},{"prompt":"A page calls **17** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["1.686%","0.005882%","0.1%","3.4%"],"answer":0,"explanation":"1 − (1 − 0.001)^17 ≈ 1.686%."},{"prompt":"A page calls **25** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["22.22%","50%","0.04%","1%"],"answer":0,"explanation":"1 − (1 − 0.01)^25 ≈ 22.22%."}]
---
# Design Drill: Tail latency under fan-out #47

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
