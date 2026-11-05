---
slug: "sd05-backoff-17"
title: "Design Drill: Retry schedules #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **7 times** with delays of `min(1s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["60s","7s","128s","123s"],"answer":3,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 + 32 + 60 = 123s."},{"prompt":"A job retries **3 times** with delays of `min(2s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["14s","6s","16s","8s"],"answer":0,"explanation":"Delays: 2 + 4 + 8 = 14s."},{"prompt":"A job retries **3 times** with delays of `min(3s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["9s","12s","24s","21s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 = 21s."},{"prompt":"A job retries **7 times** with delays of `min(2s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["30s","120s","256s","14s"],"answer":1,"explanation":"Delays: 2 + 4 + 8 + 16 + 30 + 30 + 30 = 120s."},{"prompt":"A job retries **6 times** with delays of `min(5s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["250s","30s","125s","320s"],"answer":2,"explanation":"Delays: 5 + 10 + 20 + 30 + 30 + 30 = 125s."}]
---
# Design Drill: Retry schedules #17

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
