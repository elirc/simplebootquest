---
slug: "sd06-fanout-tail-49"
title: "Design Drill: Tail latency under fan-out #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **4** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["40%","18.55%","5%","1.25%"],"answer":1,"explanation":"1 − (1 − 0.05)^4 ≈ 18.55%."},{"prompt":"A page calls **11** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["110%","43.12%","5%","0.4545%"],"answer":1,"explanation":"1 − (1 − 0.05)^11 ≈ 43.12%."},{"prompt":"A page calls **3** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.6%","0.2997%","0.03333%","0.1%"],"answer":1,"explanation":"1 − (1 − 0.001)^3 ≈ 0.2997%."},{"prompt":"A page calls **75** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["75%","0.006667%","31.34%","0.5%"],"answer":2,"explanation":"1 − (1 − 0.005)^75 ≈ 31.34%."},{"prompt":"A page calls **18** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","36%","16.55%","0.05556%"],"answer":2,"explanation":"1 − (1 − 0.01)^18 ≈ 16.55%."}]
---
# Design Drill: Tail latency under fan-out #49

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
