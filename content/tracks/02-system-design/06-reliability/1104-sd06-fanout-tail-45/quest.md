---
slug: "sd06-fanout-tail-45"
title: "Design Drill: Tail latency under fan-out #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **79** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["79.73%","2%","316%","0.02532%"],"answer":0,"explanation":"1 − (1 − 0.02)^79 ≈ 79.73%."},{"prompt":"A page calls **55** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["94.05%","0.09091%","5%","550%"],"answer":0,"explanation":"1 − (1 − 0.05)^55 ≈ 94.05%."},{"prompt":"A page calls **83** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["34.03%","0.006024%","0.5%","83%"],"answer":0,"explanation":"1 − (1 − 0.005)^83 ≈ 34.03%."},{"prompt":"A page calls **47** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","188%","61.31%","0.04255%"],"answer":2,"explanation":"1 − (1 − 0.02)^47 ≈ 61.31%."},{"prompt":"A page calls **53** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["65.72%","2%","0.03774%","212%"],"answer":0,"explanation":"1 − (1 − 0.02)^53 ≈ 65.72%."}]
---
# Design Drill: Tail latency under fan-out #45

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
