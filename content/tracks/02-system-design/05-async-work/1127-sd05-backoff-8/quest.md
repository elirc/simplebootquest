---
slug: "sd05-backoff-8"
title: "Design Drill: Retry schedules #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **4 times** with delays of `min(1s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["16s","8s","15s","4s"],"answer":2,"explanation":"Delays: 1 + 2 + 4 + 8 = 15s."},{"prompt":"A job retries **6 times** with delays of `min(2s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["30s","12s","128s","90s"],"answer":3,"explanation":"Delays: 2 + 4 + 8 + 16 + 30 + 30 = 90s."},{"prompt":"A job retries **4 times** with delays of `min(1s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["16s","15s","4s","8s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 + 8 = 15s."},{"prompt":"A job retries **6 times** with delays of `min(5s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["320s","30s","55s","10s"],"answer":2,"explanation":"Delays: 5 + 10 + 10 + 10 + 10 + 10 = 55s."},{"prompt":"A job retries **4 times** with delays of `min(5s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["20s","40s","75s","80s"],"answer":2,"explanation":"Delays: 5 + 10 + 20 + 40 = 75s."}]
---
# Design Drill: Retry schedules #8

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
