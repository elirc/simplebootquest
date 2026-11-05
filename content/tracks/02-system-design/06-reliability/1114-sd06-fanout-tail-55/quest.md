---
slug: "sd06-fanout-tail-55"
title: "Design Drill: Tail latency under fan-out #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **53** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["93.4%","0.09434%","530%","5%"],"answer":0,"explanation":"1 − (1 − 0.05)^53 ≈ 93.4%."},{"prompt":"A page calls **89** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["83.44%","0.02247%","2%","356%"],"answer":0,"explanation":"1 − (1 − 0.02)^89 ≈ 83.44%."},{"prompt":"A page calls **92** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["368%","2%","0.02174%","84.41%"],"answer":3,"explanation":"1 − (1 − 0.02)^92 ≈ 84.41%."},{"prompt":"A page calls **8** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["33.66%","0.625%","5%","80%"],"answer":0,"explanation":"1 − (1 − 0.05)^8 ≈ 33.66%."},{"prompt":"A page calls **90** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","59.53%","180%","0.01111%"],"answer":1,"explanation":"1 − (1 − 0.01)^90 ≈ 59.53%."}]
---
# Design Drill: Tail latency under fan-out #55

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
