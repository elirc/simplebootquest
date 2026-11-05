---
slug: "sd06-fanout-tail-11"
title: "Design Drill: Tail latency under fan-out #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **43** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["88.98%","430%","5%","0.1163%"],"answer":0,"explanation":"1 − (1 − 0.05)^43 ≈ 88.98%."},{"prompt":"A page calls **35** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["83.39%","0.1429%","5%","350%"],"answer":0,"explanation":"1 − (1 − 0.05)^35 ≈ 83.39%."},{"prompt":"A page calls **35** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["140%","50.69%","2%","0.05714%"],"answer":1,"explanation":"1 − (1 − 0.02)^35 ≈ 50.69%."},{"prompt":"A page calls **9** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["0.1111%","1%","8.648%","18%"],"answer":2,"explanation":"1 − (1 − 0.01)^9 ≈ 8.648%."},{"prompt":"A page calls **30** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.06667%","120%","2%","45.45%"],"answer":3,"explanation":"1 − (1 − 0.02)^30 ≈ 45.45%."}]
---
# Design Drill: Tail latency under fan-out #11

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
