---
slug: "sd05-backoff-15"
title: "Design Drill: Retry schedules #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **4 times** with delays of `min(5s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["80s","35s","10s","20s"],"answer":1,"explanation":"Delays: 5 + 10 + 10 + 10 = 35s."},{"prompt":"A job retries **5 times** with delays of `min(1s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["16s","5s","32s","31s"],"answer":3,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 = 31s."},{"prompt":"A job retries **7 times** with delays of `min(3s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["21s","384s","59s","10s"],"answer":2,"explanation":"Delays: 3 + 6 + 10 + 10 + 10 + 10 + 10 = 59s."},{"prompt":"A job retries **5 times** with delays of `min(1s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["32s","31s","5s","16s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 = 31s."},{"prompt":"A job retries **3 times** with delays of `min(3s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["12s","9s","24s","21s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 = 21s."}]
---
# Design Drill: Retry schedules #15

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
