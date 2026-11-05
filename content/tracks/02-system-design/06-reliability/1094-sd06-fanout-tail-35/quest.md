---
slug: "sd06-fanout-tail-35"
title: "Design Drill: Tail latency under fan-out #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **80** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","33.04%","80%","0.00625%"],"answer":1,"explanation":"1 − (1 − 0.005)^80 ≈ 33.04%."},{"prompt":"A page calls **9** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["90%","5%","0.5556%","36.98%"],"answer":3,"explanation":"1 − (1 − 0.05)^9 ≈ 36.98%."},{"prompt":"A page calls **5** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["4.901%","0.2%","1%","10%"],"answer":0,"explanation":"1 − (1 − 0.01)^5 ≈ 4.901%."},{"prompt":"A page calls **96** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["99.27%","960%","5%","0.05208%"],"answer":0,"explanation":"1 − (1 − 0.05)^96 ≈ 99.27%."},{"prompt":"A page calls **91** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["5%","99.06%","910%","0.05495%"],"answer":1,"explanation":"1 − (1 − 0.05)^91 ≈ 99.06%."}]
---
# Design Drill: Tail latency under fan-out #35

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
