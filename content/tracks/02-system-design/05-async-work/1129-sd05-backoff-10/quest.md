---
slug: "sd05-backoff-10"
title: "Design Drill: Retry schedules #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **4 times** with delays of `min(2s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["8s","16s","30s","32s"],"answer":2,"explanation":"Delays: 2 + 4 + 8 + 16 = 30s."},{"prompt":"A job retries **7 times** with delays of `min(2s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["60s","256s","182s","14s"],"answer":2,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 + 60 + 60 = 182s."},{"prompt":"A job retries **7 times** with delays of `min(1s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["128s","64s","7s","127s"],"answer":3,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 + 32 + 64 = 127s."},{"prompt":"A job retries **5 times** with delays of `min(2s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["64s","10s","62s","32s"],"answer":2,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 = 62s."},{"prompt":"A job retries **3 times** with delays of `min(1s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["3s","4s","8s","7s"],"answer":3,"explanation":"Delays: 1 + 2 + 4 = 7s."}]
---
# Design Drill: Retry schedules #10

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
