---
slug: "sd06-fanout-tail-22"
title: "Design Drill: Tail latency under fan-out #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **62** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","0.001613%","6.015%","12.4%"],"answer":2,"explanation":"1 − (1 − 0.001)^62 ≈ 6.015%."},{"prompt":"A page calls **52** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["65.03%","2%","0.03846%","208%"],"answer":0,"explanation":"1 − (1 − 0.02)^52 ≈ 65.03%."},{"prompt":"A page calls **68** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["28.88%","0.007353%","68%","0.5%"],"answer":0,"explanation":"1 − (1 − 0.005)^68 ≈ 28.88%."},{"prompt":"A page calls **21** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.004762%","0.1%","4.2%","2.079%"],"answer":3,"explanation":"1 − (1 − 0.001)^21 ≈ 2.079%."},{"prompt":"A page calls **50** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["22.17%","0.5%","0.01%","50%"],"answer":0,"explanation":"1 − (1 − 0.005)^50 ≈ 22.17%."}]
---
# Design Drill: Tail latency under fan-out #22

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
