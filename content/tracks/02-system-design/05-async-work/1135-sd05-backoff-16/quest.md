---
slug: "sd05-backoff-16"
title: "Design Drill: Retry schedules #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **5 times** with delays of `min(3s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["39s","10s","15s","96s"],"answer":0,"explanation":"Delays: 3 + 6 + 10 + 10 + 10 = 39s."},{"prompt":"A job retries **7 times** with delays of `min(2s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["14s","120s","256s","246s"],"answer":3,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 + 64 + 120 = 246s."},{"prompt":"A job retries **6 times** with delays of `min(1s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["6s","64s","32s","63s"],"answer":3,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 + 32 = 63s."},{"prompt":"A job retries **3 times** with delays of `min(3s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["24s","9s","12s","21s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 = 21s."},{"prompt":"A job retries **6 times** with delays of `min(1s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["30s","61s","6s","64s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 + 30 = 61s."}]
---
# Design Drill: Retry schedules #16

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
