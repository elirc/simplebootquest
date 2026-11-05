---
slug: "sd06-fanout-tail-46"
title: "Design Drill: Tail latency under fan-out #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **30** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","60%","26.03%","0.03333%"],"answer":2,"explanation":"1 − (1 − 0.01)^30 ≈ 26.03%."},{"prompt":"A page calls **17** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["8.168%","0.02941%","0.5%","17%"],"answer":0,"explanation":"1 − (1 − 0.005)^17 ≈ 8.168%."},{"prompt":"A page calls **62** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.08065%","5%","95.84%","620%"],"answer":2,"explanation":"1 − (1 − 0.05)^62 ≈ 95.84%."},{"prompt":"A page calls **82** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["164%","1%","0.0122%","56.14%"],"answer":3,"explanation":"1 − (1 − 0.01)^82 ≈ 56.14%."},{"prompt":"A page calls **51** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["22.56%","0.5%","51%","0.009804%"],"answer":0,"explanation":"1 − (1 − 0.005)^51 ≈ 22.56%."}]
---
# Design Drill: Tail latency under fan-out #46

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
