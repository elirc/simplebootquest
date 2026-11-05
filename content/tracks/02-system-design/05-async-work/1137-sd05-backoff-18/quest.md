---
slug: "sd05-backoff-18"
title: "Design Drill: Retry schedules #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **4 times** with delays of `min(2s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["8s","16s","30s","32s"],"answer":2,"explanation":"Delays: 2 + 4 + 8 + 16 = 30s."},{"prompt":"A job retries **3 times** with delays of `min(2s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["8s","6s","14s","16s"],"answer":2,"explanation":"Delays: 2 + 4 + 8 = 14s."},{"prompt":"A job retries **6 times** with delays of `min(2s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["60s","128s","12s","122s"],"answer":3,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 + 60 = 122s."},{"prompt":"A job retries **5 times** with delays of `min(3s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["93s","15s","48s","96s"],"answer":0,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 = 93s."},{"prompt":"A job retries **3 times** with delays of `min(1s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["7s","3s","8s","4s"],"answer":0,"explanation":"Delays: 1 + 2 + 4 = 7s."}]
---
# Design Drill: Retry schedules #18

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
