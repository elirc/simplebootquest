---
slug: "sd06-fanout-tail-20"
title: "Design Drill: Tail latency under fan-out #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **4** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","7.763%","0.5%","16%"],"answer":1,"explanation":"1 − (1 − 0.02)^4 ≈ 7.763%."},{"prompt":"A page calls **83** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.0241%","81.3%","332%","2%"],"answer":1,"explanation":"1 − (1 − 0.02)^83 ≈ 81.3%."},{"prompt":"A page calls **25** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["25%","0.02%","11.78%","0.5%"],"answer":2,"explanation":"1 − (1 − 0.005)^25 ≈ 11.78%."},{"prompt":"A page calls **34** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["3.344%","0.1%","0.002941%","6.8%"],"answer":0,"explanation":"1 − (1 − 0.001)^34 ≈ 3.344%."},{"prompt":"A page calls **33** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["66%","0.0303%","28.23%","1%"],"answer":2,"explanation":"1 − (1 − 0.01)^33 ≈ 28.23%."}]
---
# Design Drill: Tail latency under fan-out #20

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
