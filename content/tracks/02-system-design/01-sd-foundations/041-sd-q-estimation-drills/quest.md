---
slug: "sd-q-estimation-drills"
title: "Estimation Drills"
type: "quiz"
xp: 15
resources: [{"title": "Jeff Dean: Numbers everyone should know", "url": "https://brenocon.com/dean_perf.html"}]
questions: [{"prompt": "10 million requests per day is roughly how many per second on average?", "options": ["10", "100", "1,000", "10,000"], "answer": 1}, {"prompt": "Each of 2M users uploads one 200 KB photo per day. Roughly how much storage per year?", "options": ["15 GB", "150 GB", "150 TB", "1.5 PB"], "answer": 2}, {"prompt": "Why multiply the average by a peak factor?", "options": ["To impress reviewers", "Traffic is uneven: you must handle the busiest minutes, not the daily average", "Averages are always wrong"], "answer": 1}, {"prompt": "Your estimate says 50 writes/second. What does that tell you?", "options": ["You need sharding immediately", "A single well-indexed Postgres primary handles this comfortably", "You need Kafka"], "answer": 1}, {"prompt": "A feature stores 1 KB per event, with 1,000 events per second. Roughly how much data per day?", "options": ["86 MB", "86 GB", "8.6 TB", "860 KB"], "answer": 1}]
---
# Estimation Drills

Back-of-the-envelope estimates aren't about precision. They tell you **which order of magnitude** you're in, and that decides the architecture. Memorise a few anchors:

| Anchor | Value |
|--------|-------|
| Seconds per day | 86,400 ≈ **10⁵** |
| Requests/day → per second | divide by 10⁵ |
| Peak vs average | ×2 to ×10 (consumer apps spike in the evening) |
| 1 million × 1 KB | 1 GB |
| A single Postgres on decent hardware | thousands of simple queries/s |
| A single Node process | ~1–5k simple requests/s |

Worked example: 1M daily active users, each making 50 API calls a day → 5×10⁷ calls/day ÷ 10⁵ = **500 req/s** on average, maybe 2,500 at peak. That's a few Node instances behind a load balancer, not a fleet of microservices.
