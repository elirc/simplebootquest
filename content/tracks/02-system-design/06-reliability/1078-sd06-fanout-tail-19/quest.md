---
slug: "sd06-fanout-tail-19"
title: "Design Drill: Tail latency under fan-out #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **75** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["78.02%","0.02667%","2%","300%"],"answer":0,"explanation":"1 − (1 − 0.02)^75 ≈ 78.02%."},{"prompt":"A page calls **93** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["372%","0.02151%","2%","84.72%"],"answer":3,"explanation":"1 − (1 − 0.02)^93 ≈ 84.72%."},{"prompt":"A page calls **74** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["74%","0.006757%","30.99%","0.5%"],"answer":2,"explanation":"1 − (1 − 0.005)^74 ≈ 30.99%."},{"prompt":"A page calls **86** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","0.01163%","172%","57.87%"],"answer":3,"explanation":"1 − (1 − 0.01)^86 ≈ 57.87%."},{"prompt":"A page calls **26** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["0.1923%","260%","5%","73.65%"],"answer":3,"explanation":"1 − (1 − 0.05)^26 ≈ 73.65%."}]
---
# Design Drill: Tail latency under fan-out #19

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
