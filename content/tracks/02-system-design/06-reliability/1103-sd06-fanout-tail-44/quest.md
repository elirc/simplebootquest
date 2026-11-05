---
slug: "sd06-fanout-tail-44"
title: "Design Drill: Tail latency under fan-out #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **52** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["40.7%","104%","1%","0.01923%"],"answer":0,"explanation":"1 − (1 − 0.01)^52 ≈ 40.7%."},{"prompt":"A page calls **55** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["67.08%","220%","0.03636%","2%"],"answer":0,"explanation":"1 − (1 − 0.02)^55 ≈ 67.08%."},{"prompt":"A page calls **91** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["91%","36.63%","0.5%","0.005495%"],"answer":1,"explanation":"1 − (1 − 0.005)^91 ≈ 36.63%."},{"prompt":"A page calls **49** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","490%","0.102%","91.9%"],"answer":3,"explanation":"1 − (1 − 0.05)^49 ≈ 91.9%."},{"prompt":"A page calls **90** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["8.611%","0.1%","18%","0.001111%"],"answer":0,"explanation":"1 − (1 − 0.001)^90 ≈ 8.611%."}]
---
# Design Drill: Tail latency under fan-out #44

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
