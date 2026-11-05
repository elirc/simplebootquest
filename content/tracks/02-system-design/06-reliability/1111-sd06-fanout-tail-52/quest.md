---
slug: "sd06-fanout-tail-52"
title: "Design Drill: Tail latency under fan-out #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **16** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["14.85%","1%","32%","0.0625%"],"answer":0,"explanation":"1 − (1 − 0.01)^16 ≈ 14.85%."},{"prompt":"A page calls **12** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["5.838%","0.04167%","12%","0.5%"],"answer":0,"explanation":"1 − (1 − 0.005)^12 ≈ 5.838%."},{"prompt":"A page calls **95** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["61.51%","0.01053%","1%","190%"],"answer":0,"explanation":"1 − (1 − 0.01)^95 ≈ 61.51%."},{"prompt":"A page calls **56** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.03571%","67.74%","224%","2%"],"answer":1,"explanation":"1 − (1 − 0.02)^56 ≈ 67.74%."},{"prompt":"A page calls **5** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.02%","0.499%","1%","0.1%"],"answer":1,"explanation":"1 − (1 − 0.001)^5 ≈ 0.499%."}]
---
# Design Drill: Tail latency under fan-out #52

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
