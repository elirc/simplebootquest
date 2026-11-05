---
slug: "sd05-backoff-4"
title: "Design Drill: Retry schedules #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **3 times** with delays of `min(2s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["6s","14s","8s","16s"],"answer":1,"explanation":"Delays: 2 + 4 + 8 = 14s."},{"prompt":"A job retries **7 times** with delays of `min(5s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["120s","640s","35s","395s"],"answer":3,"explanation":"Delays: 5 + 10 + 20 + 40 + 80 + 120 + 120 = 395s."},{"prompt":"A job retries **5 times** with delays of `min(2s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["32s","62s","64s","10s"],"answer":1,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 = 62s."},{"prompt":"A job retries **5 times** with delays of `min(3s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["48s","15s","96s","93s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 = 93s."},{"prompt":"A job retries **5 times** with delays of `min(5s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["60s","160s","135s","25s"],"answer":2,"explanation":"Delays: 5 + 10 + 20 + 40 + 60 = 135s."}]
---
# Design Drill: Retry schedules #4

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
