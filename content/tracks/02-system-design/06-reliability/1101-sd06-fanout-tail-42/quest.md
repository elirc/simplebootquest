---
slug: "sd06-fanout-tail-42"
title: "Design Drill: Tail latency under fan-out #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **43** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["172%","58.05%","2%","0.04651%"],"answer":1,"explanation":"1 − (1 − 0.02)^43 ≈ 58.05%."},{"prompt":"A page calls **38** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["7.6%","0.002632%","3.731%","0.1%"],"answer":2,"explanation":"1 − (1 − 0.001)^38 ≈ 3.731%."},{"prompt":"A page calls **82** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["328%","0.02439%","2%","80.92%"],"answer":3,"explanation":"1 − (1 − 0.02)^82 ≈ 80.92%."},{"prompt":"A page calls **24** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.08333%","2%","38.42%","96%"],"answer":2,"explanation":"1 − (1 − 0.02)^24 ≈ 38.42%."},{"prompt":"A page calls **33** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","6.6%","0.00303%","3.248%"],"answer":3,"explanation":"1 − (1 − 0.001)^33 ≈ 3.248%."}]
---
# Design Drill: Tail latency under fan-out #42

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
