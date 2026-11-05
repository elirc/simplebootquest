---
slug: "sd06-fanout-tail-33"
title: "Design Drill: Tail latency under fan-out #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **96** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["96%","38.2%","0.005208%","0.5%"],"answer":1,"explanation":"1 − (1 − 0.005)^96 ≈ 38.2%."},{"prompt":"A page calls **65** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["6.296%","13%","0.1%","0.001538%"],"answer":0,"explanation":"1 − (1 − 0.001)^65 ≈ 6.296%."},{"prompt":"A page calls **31** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["31%","14.39%","0.5%","0.01613%"],"answer":1,"explanation":"1 − (1 − 0.005)^31 ≈ 14.39%."},{"prompt":"A page calls **85** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["8.153%","0.1%","17%","0.001176%"],"answer":0,"explanation":"1 − (1 − 0.001)^85 ≈ 8.153%."},{"prompt":"A page calls **97** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["194%","62.28%","1%","0.01031%"],"answer":1,"explanation":"1 − (1 − 0.01)^97 ≈ 62.28%."}]
---
# Design Drill: Tail latency under fan-out #33

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
