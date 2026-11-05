---
slug: "sd05-backoff-13"
title: "Design Drill: Retry schedules #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **3 times** with delays of `min(5s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["40s","25s","15s","10s"],"answer":1,"explanation":"Delays: 5 + 10 + 10 = 25s."},{"prompt":"A job retries **6 times** with delays of `min(3s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["18s","192s","105s","30s"],"answer":2,"explanation":"Delays: 3 + 6 + 12 + 24 + 30 + 30 = 105s."},{"prompt":"A job retries **3 times** with delays of `min(3s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["12s","21s","9s","24s"],"answer":1,"explanation":"Delays: 3 + 6 + 12 = 21s."},{"prompt":"A job retries **7 times** with delays of `min(5s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["640s","635s","35s","320s"],"answer":1,"explanation":"Delays: 5 + 10 + 20 + 40 + 80 + 160 + 320 = 635s."},{"prompt":"A job retries **6 times** with delays of `min(1s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["6s","63s","64s","32s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 + 32 = 63s."}]
---
# Design Drill: Retry schedules #13

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
