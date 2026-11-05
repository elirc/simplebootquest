---
slug: "sd06-fanout-tail-40"
title: "Design Drill: Tail latency under fan-out #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **88** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["83.1%","2%","352%","0.02273%"],"answer":0,"explanation":"1 − (1 − 0.02)^88 ≈ 83.1%."},{"prompt":"A page calls **77** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["32.02%","77%","0.006494%","0.5%"],"answer":0,"explanation":"1 − (1 − 0.005)^77 ≈ 32.02%."},{"prompt":"A page calls **91** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["8.702%","0.1%","18.2%","0.001099%"],"answer":0,"explanation":"1 − (1 − 0.001)^91 ≈ 8.702%."},{"prompt":"A page calls **75** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","0.01333%","150%","52.94%"],"answer":3,"explanation":"1 − (1 − 0.01)^75 ≈ 52.94%."},{"prompt":"A page calls **13** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["26%","1%","0.07692%","12.25%"],"answer":3,"explanation":"1 − (1 − 0.01)^13 ≈ 12.25%."}]
---
# Design Drill: Tail latency under fan-out #40

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
