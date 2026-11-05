---
slug: "sd06-fanout-tail-4"
title: "Design Drill: Tail latency under fan-out #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **71** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","0.01408%","51.01%","142%"],"answer":2,"explanation":"1 − (1 − 0.01)^71 ≈ 51.01%."},{"prompt":"A page calls **4** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.3994%","0.025%","0.8%","0.1%"],"answer":0,"explanation":"1 − (1 − 0.001)^4 ≈ 0.3994%."},{"prompt":"A page calls **93** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["18.6%","0.001075%","8.885%","0.1%"],"answer":2,"explanation":"1 − (1 − 0.001)^93 ≈ 8.885%."},{"prompt":"A page calls **92** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","0.005435%","36.94%","92%"],"answer":2,"explanation":"1 − (1 − 0.005)^92 ≈ 36.94%."},{"prompt":"A page calls **61** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["12.2%","0.001639%","0.1%","5.921%"],"answer":3,"explanation":"1 − (1 − 0.001)^61 ≈ 5.921%."}]
---
# Design Drill: Tail latency under fan-out #4

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
