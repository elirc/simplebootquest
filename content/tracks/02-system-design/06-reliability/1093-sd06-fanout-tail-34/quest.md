---
slug: "sd06-fanout-tail-34"
title: "Design Drill: Tail latency under fan-out #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **49** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.002041%","9.8%","4.784%","0.1%"],"answer":2,"explanation":"1 − (1 − 0.001)^49 ≈ 4.784%."},{"prompt":"A page calls **28** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","2.763%","0.003571%","5.6%"],"answer":1,"explanation":"1 − (1 − 0.001)^28 ≈ 2.763%."},{"prompt":"A page calls **37** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["16.93%","37%","0.01351%","0.5%"],"answer":0,"explanation":"1 − (1 − 0.005)^37 ≈ 16.93%."},{"prompt":"A page calls **35** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","35%","0.01429%","16.09%"],"answer":3,"explanation":"1 − (1 − 0.005)^35 ≈ 16.09%."},{"prompt":"A page calls **12** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["11.36%","0.08333%","24%","1%"],"answer":0,"explanation":"1 − (1 − 0.01)^12 ≈ 11.36%."}]
---
# Design Drill: Tail latency under fan-out #34

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
