---
slug: "sd06-fanout-tail-23"
title: "Design Drill: Tail latency under fan-out #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A page calls **84** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["16.8%","0.1%","8.061%","0.00119%"],"answer":2,"explanation":"1 − (1 − 0.001)^84 ≈ 8.061%."},{"prompt":"A page calls **88** backend services in parallel and waits for all of them. Each call is slower than its p95 latency 5% of the time. How often is the page slow?","options":["880%","98.9%","0.05682%","5%"],"answer":1,"explanation":"1 − (1 − 0.05)^88 ≈ 98.9%."},{"prompt":"A page calls **45** backend services in parallel and waits for all of them. Each call is slower than its p99.9 latency 0.1% of the time. How often is the page slow?","options":["4.402%","9%","0.002222%","0.1%"],"answer":0,"explanation":"1 − (1 − 0.001)^45 ≈ 4.402%."},{"prompt":"A page calls **15** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["0.1333%","26.14%","60%","2%"],"answer":1,"explanation":"1 − (1 − 0.02)^15 ≈ 26.14%."},{"prompt":"A page calls **95** backend services in parallel and waits for all of them. Each call is slower than its p98 latency 2% of the time. How often is the page slow?","options":["380%","85.33%","0.02105%","2%"],"answer":1,"explanation":"1 − (1 − 0.02)^95 ≈ 85.33%."}]
---
# Design Drill: Tail latency under fan-out #23

If a page waits for N backend calls and each is "slow" with probability p, the page is slow with probability 1 − (1 − p)^N. That's why p99 matters more than averages.
