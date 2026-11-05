---
slug: "sd06-fanout-tail-39"
title: "Design Drill: Tail latency under fan-out #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **96** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["61.9%","0.01042%","192%","1%"],"answer":0,"explanation":"1 − (1 − 0.01)^96 ≈ 61.9%."},{"prompt":"A page calls **81** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","81%","33.37%","0.006173%"],"answer":2,"explanation":"1 − (1 − 0.005)^81 ≈ 33.37%."},{"prompt":"A page calls **54** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["66.41%","216%","0.03704%","2%"],"answer":0,"explanation":"1 − (1 − 0.02)^54 ≈ 66.41%."},{"prompt":"A page calls **6** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["1.2%","0.5985%","0.01667%","0.1%"],"answer":1,"explanation":"1 − (1 − 0.001)^6 ≈ 0.5985%."},{"prompt":"A page calls **2** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1.99%","1%","4%","0.5%"],"answer":0,"explanation":"1 − (1 − 0.01)^2 ≈ 1.99%."}]
---
# Design Drill: Tail latency under fan-out #39

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
