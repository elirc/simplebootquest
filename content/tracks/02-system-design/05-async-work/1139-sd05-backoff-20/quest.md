---
slug: "sd05-backoff-20"
title: "Design Drill: Retry schedules #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **5 times** with delays of `min(2s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["64s","10s","60s","30s"],"answer":2,"explanation":"Delays: 2 + 4 + 8 + 16 + 30 = 60s."},{"prompt":"A job retries **6 times** with delays of `min(1s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["32s","6s","63s","64s"],"answer":2,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 + 32 = 63s."},{"prompt":"A job retries **3 times** with delays of `min(2s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["14s","8s","6s","16s"],"answer":0,"explanation":"Delays: 2 + 4 + 8 = 14s."},{"prompt":"A job retries **6 times** with delays of `min(5s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["315s","320s","160s","30s"],"answer":0,"explanation":"Delays: 5 + 10 + 20 + 40 + 80 + 160 = 315s."},{"prompt":"A job retries **4 times** with delays of `min(1s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["4s","16s","15s","8s"],"answer":2,"explanation":"Delays: 1 + 2 + 4 + 8 = 15s."}]
---
# Design Drill: Retry schedules #20

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
