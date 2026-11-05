---
slug: "sd05-backoff-6"
title: "Design Drill: Retry schedules #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **5 times** with delays of `min(1s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["10s","25s","5s","32s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 + 8 + 10 = 25s."},{"prompt":"A job retries **4 times** with delays of `min(2s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["8s","16s","32s","30s"],"answer":3,"explanation":"Delays: 2 + 4 + 8 + 16 = 30s."},{"prompt":"A job retries **7 times** with delays of `min(1s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["91s","7s","30s","128s"],"answer":0,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 + 30 + 30 = 91s."},{"prompt":"A job retries **4 times** with delays of `min(3s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["12s","45s","24s","48s"],"answer":1,"explanation":"Delays: 3 + 6 + 12 + 24 = 45s."},{"prompt":"A job retries **5 times** with delays of `min(3s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["96s","30s","75s","15s"],"answer":2,"explanation":"Delays: 3 + 6 + 12 + 24 + 30 = 75s."}]
---
# Design Drill: Retry schedules #6

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
