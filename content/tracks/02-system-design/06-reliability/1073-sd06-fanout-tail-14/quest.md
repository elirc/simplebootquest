---
slug: "sd06-fanout-tail-14"
title: "Design Drill: Tail latency under fan-out #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **59** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.008475%","59%","0.5%","25.6%"],"answer":3,"explanation":"1 − (1 − 0.005)^59 ≈ 25.6%."},{"prompt":"A page calls **59** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["2%","0.0339%","69.64%","236%"],"answer":2,"explanation":"1 − (1 − 0.02)^59 ≈ 69.64%."},{"prompt":"A page calls **78** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["156%","0.01282%","1%","54.34%"],"answer":3,"explanation":"1 − (1 − 0.01)^78 ≈ 54.34%."},{"prompt":"A page calls **31** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.06452%","2%","46.54%","124%"],"answer":2,"explanation":"1 − (1 − 0.02)^31 ≈ 46.54%."},{"prompt":"A page calls **47** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["94%","0.02128%","1%","37.65%"],"answer":3,"explanation":"1 − (1 − 0.01)^47 ≈ 37.65%."}]
---
# Design Drill: Tail latency under fan-out #14

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
