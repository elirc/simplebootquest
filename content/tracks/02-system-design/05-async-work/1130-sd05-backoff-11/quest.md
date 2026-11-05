---
slug: "sd05-backoff-11"
title: "Design Drill: Retry schedules #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **3 times** with delays of `min(2s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["14s","6s","16s","8s"],"answer":0,"explanation":"Delays: 2 + 4 + 8 = 14s."},{"prompt":"A job retries **3 times** with delays of `min(5s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["20s","40s","35s","15s"],"answer":2,"explanation":"Delays: 5 + 10 + 20 = 35s."},{"prompt":"A job retries **3 times** with delays of `min(1s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["8s","7s","4s","3s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 = 7s."},{"prompt":"A job retries **7 times** with delays of `min(2s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["254s","256s","14s","128s"],"answer":0,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 + 64 + 128 = 254s."},{"prompt":"A job retries **6 times** with delays of `min(3s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["192s","96s","18s","189s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 + 96 = 189s."}]
---
# Design Drill: Retry schedules #11

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
