---
slug: "sd06-fanout-tail-17"
title: "Design Drill: Tail latency under fan-out #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **53** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["10.6%","0.1%","0.001887%","5.165%"],"answer":3,"explanation":"1 − (1 − 0.001)^53 ≈ 5.165%."},{"prompt":"A page calls **14** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.1429%","56%","24.64%","2%"],"answer":2,"explanation":"1 − (1 − 0.02)^14 ≈ 24.64%."},{"prompt":"A page calls **63** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["6.109%","0.001587%","12.6%","0.1%"],"answer":0,"explanation":"1 − (1 − 0.001)^63 ≈ 6.109%."},{"prompt":"A page calls **100** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["63.4%","1%","0.01%","200%"],"answer":0,"explanation":"1 − (1 − 0.01)^100 ≈ 63.4%."},{"prompt":"A page calls **21** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["42%","0.04762%","19.03%","1%"],"answer":2,"explanation":"1 − (1 − 0.01)^21 ≈ 19.03%."}]
---
# Design Drill: Tail latency under fan-out #17

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
