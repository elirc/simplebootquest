---
slug: "sd06-fanout-tail-59"
title: "Design Drill: Tail latency under fan-out #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **10** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.5%","100%","5%","40.13%"],"answer":3,"explanation":"1 − (1 − 0.05)^10 ≈ 40.13%."},{"prompt":"A page calls **47** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["20.99%","0.5%","47%","0.01064%"],"answer":0,"explanation":"1 − (1 − 0.005)^47 ≈ 20.99%."},{"prompt":"A page calls **15** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["13.99%","0.06667%","1%","30%"],"answer":0,"explanation":"1 − (1 − 0.01)^15 ≈ 13.99%."},{"prompt":"A page calls **36** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.01389%","16.51%","0.5%","36%"],"answer":1,"explanation":"1 − (1 − 0.005)^36 ≈ 16.51%."},{"prompt":"A page calls **34** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["49.69%","2%","0.05882%","136%"],"answer":0,"explanation":"1 − (1 − 0.02)^34 ≈ 49.69%."}]
---
# Design Drill: Tail latency under fan-out #59

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
