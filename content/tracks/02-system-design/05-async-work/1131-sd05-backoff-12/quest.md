---
slug: "sd05-backoff-12"
title: "Design Drill: Retry schedules #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **3 times** with delays of `min(5s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["35s","20s","15s","40s"],"answer":0,"explanation":"Delays: 5 + 10 + 20 = 35s."},{"prompt":"A job retries **6 times** with delays of `min(2s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["12s","128s","126s","64s"],"answer":2,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 + 64 = 126s."},{"prompt":"A job retries **4 times** with delays of `min(3s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["10s","12s","29s","48s"],"answer":2,"explanation":"Delays: 3 + 6 + 10 + 10 = 29s."},{"prompt":"A job retries **7 times** with delays of `min(3s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["21s","384s","213s","60s"],"answer":2,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 + 60 + 60 = 213s."},{"prompt":"A job retries **5 times** with delays of `min(2s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["62s","32s","64s","10s"],"answer":0,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 = 62s."}]
---
# Design Drill: Retry schedules #12

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
