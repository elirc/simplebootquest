---
slug: "sd06-fanout-tail-36"
title: "Design Drill: Tail latency under fan-out #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **60** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["45.28%","0.01667%","1%","120%"],"answer":0,"explanation":"1 − (1 − 0.01)^60 ≈ 45.28%."},{"prompt":"A page calls **61** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","95.62%","610%","0.08197%"],"answer":1,"explanation":"1 − (1 − 0.05)^61 ≈ 95.62%."},{"prompt":"A page calls **99** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["63.03%","198%","1%","0.0101%"],"answer":0,"explanation":"1 − (1 − 0.01)^99 ≈ 63.03%."},{"prompt":"A page calls **51** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["40.1%","0.01961%","1%","102%"],"answer":0,"explanation":"1 − (1 − 0.01)^51 ≈ 40.1%."},{"prompt":"A page calls **47** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["91.03%","5%","0.1064%","470%"],"answer":0,"explanation":"1 − (1 − 0.05)^47 ≈ 91.03%."}]
---
# Design Drill: Tail latency under fan-out #36

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
