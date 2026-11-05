---
slug: "sd06-fanout-tail-57"
title: "Design Drill: Tail latency under fan-out #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **74** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","148%","0.01351%","52.47%"],"answer":3,"explanation":"1 − (1 − 0.01)^74 ≈ 52.47%."},{"prompt":"A page calls **29** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","0.003448%","5.8%","2.86%"],"answer":3,"explanation":"1 − (1 − 0.001)^29 ≈ 2.86%."},{"prompt":"A page calls **29** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["290%","5%","0.1724%","77.41%"],"answer":3,"explanation":"1 − (1 − 0.05)^29 ≈ 77.41%."},{"prompt":"A page calls **42** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["1%","34.43%","84%","0.02381%"],"answer":1,"explanation":"1 − (1 − 0.01)^42 ≈ 34.43%."},{"prompt":"A page calls **77** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.001299%","7.415%","0.1%","15.4%"],"answer":1,"explanation":"1 − (1 − 0.001)^77 ≈ 7.415%."}]
---
# Design Drill: Tail latency under fan-out #57

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
