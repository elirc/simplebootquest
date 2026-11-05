---
slug: "sd06-fanout-tail-2"
title: "Design Drill: Tail latency under fan-out #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **50** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["200%","2%","0.04%","63.58%"],"answer":3,"explanation":"1 − (1 − 0.02)^50 ≈ 63.58%."},{"prompt":"A page calls **46** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.04348%","184%","60.52%","2%"],"answer":2,"explanation":"1 − (1 − 0.02)^46 ≈ 60.52%."},{"prompt":"A page calls **3** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["3%","0.5%","1.493%","0.1667%"],"answer":2,"explanation":"1 − (1 − 0.005)^3 ≈ 1.493%."},{"prompt":"A page calls **53** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["23.33%","0.5%","0.009434%","53%"],"answer":0,"explanation":"1 − (1 − 0.005)^53 ≈ 23.33%."},{"prompt":"A page calls **54** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["108%","0.01852%","41.88%","1%"],"answer":2,"explanation":"1 − (1 − 0.01)^54 ≈ 41.88%."}]
---
# Design Drill: Tail latency under fan-out #2

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
