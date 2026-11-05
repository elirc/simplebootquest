---
slug: "sd06-fanout-tail-60"
title: "Design Drill: Tail latency under fan-out #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **66** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["96.61%","660%","0.07576%","5%"],"answer":0,"explanation":"1 − (1 − 0.05)^66 ≈ 96.61%."},{"prompt":"A page calls **41** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["18.58%","0.0122%","0.5%","41%"],"answer":0,"explanation":"1 − (1 − 0.005)^41 ≈ 18.58%."},{"prompt":"A page calls **41** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.04878%","2%","164%","56.32%"],"answer":3,"explanation":"1 − (1 − 0.02)^41 ≈ 56.32%."},{"prompt":"A page calls **18** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["180%","60.28%","5%","0.2778%"],"answer":1,"explanation":"1 − (1 − 0.05)^18 ≈ 60.28%."},{"prompt":"A page calls **18** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["8.628%","18%","0.02778%","0.5%"],"answer":0,"explanation":"1 − (1 − 0.005)^18 ≈ 8.628%."}]
---
# Design Drill: Tail latency under fan-out #60

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
