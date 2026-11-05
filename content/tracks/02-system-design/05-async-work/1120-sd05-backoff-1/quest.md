---
slug: "sd05-backoff-1"
title: "Design Drill: Retry schedules #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **7 times** with delays of `min(1s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["64s","128s","7s","127s"],"answer":3,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 + 32 + 64 = 127s."},{"prompt":"A job retries **7 times** with delays of `min(2s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["256s","10s","54s","14s"],"answer":2,"explanation":"Delays: 2 + 4 + 8 + 10 + 10 + 10 + 10 = 54s."},{"prompt":"A job retries **4 times** with delays of `min(1s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["4s","16s","8s","15s"],"answer":3,"explanation":"Delays: 1 + 2 + 4 + 8 = 15s."},{"prompt":"A job retries **7 times** with delays of `min(3s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["192s","21s","381s","384s"],"answer":2,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 + 96 + 192 = 381s."},{"prompt":"A job retries **7 times** with delays of `min(3s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["21s","384s","30s","135s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 + 24 + 30 + 30 + 30 = 135s."}]
---
# Design Drill: Retry schedules #1

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
