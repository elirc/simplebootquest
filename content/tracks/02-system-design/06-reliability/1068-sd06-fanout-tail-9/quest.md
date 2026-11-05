---
slug: "sd06-fanout-tail-9"
title: "Design Drill: Tail latency under fan-out #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **64** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["256%","72.55%","2%","0.03125%"],"answer":1,"explanation":"1 − (1 − 0.02)^64 ≈ 72.55%."},{"prompt":"A page calls **51** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["510%","92.69%","0.09804%","5%"],"answer":1,"explanation":"1 − (1 − 0.05)^51 ≈ 92.69%."},{"prompt":"A page calls **93** backend services in parallel and waits for all of them. Each call is slower than its p99 latency 1% of the time. How often is the page slow?","options":["186%","1%","0.01075%","60.73%"],"answer":3,"explanation":"1 − (1 − 0.01)^93 ≈ 60.73%."},{"prompt":"A page calls **68** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["74.69%","2%","272%","0.02941%"],"answer":0,"explanation":"1 − (1 − 0.02)^68 ≈ 74.69%."},{"prompt":"A page calls **15** backend services in parallel and waits for all of them. Each call is slower than its p99.5 latency 0.5% of the time. How often is the page slow?","options":["0.5%","7.243%","0.03333%","15%"],"answer":1,"explanation":"1 − (1 − 0.005)^15 ≈ 7.243%."}]
---
# Design Drill: Tail latency under fan-out #9

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
