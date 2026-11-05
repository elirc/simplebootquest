---
slug: "sd06-fanout-tail-58"
title: "Design Drill: Tail latency under fan-out #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **35** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","3.441%","7%","0.002857%"],"answer":1,"explanation":"1 − (1 − 0.001)^35 ≈ 3.441%."},{"prompt":"A page calls **44** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.1%","0.002273%","4.307%","8.8%"],"answer":2,"explanation":"1 − (1 − 0.001)^44 ≈ 4.307%."},{"prompt":"A page calls **57** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["68.39%","228%","0.03509%","2%"],"answer":0,"explanation":"1 − (1 − 0.02)^57 ≈ 68.39%."},{"prompt":"A page calls **49** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","49%","21.78%","0.0102%"],"answer":2,"explanation":"1 − (1 − 0.005)^49 ≈ 21.78%."},{"prompt":"A page calls **11** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["0.009091%","1.095%","0.1%","2.2%"],"answer":1,"explanation":"1 − (1 − 0.001)^11 ≈ 1.095%."}]
---
# Design Drill: Tail latency under fan-out #58

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
