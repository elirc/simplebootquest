---
slug: "sd05-backoff-9"
title: "Design Drill: Retry schedules #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **6 times** with delays of `min(2s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["12s","126s","128s","64s"],"answer":1,"explanation":"Delays: 2 + 4 + 8 + 16 + 32 + 64 = 126s."},{"prompt":"A job retries **5 times** with delays of `min(2s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["10s","64s","68s","34s"],"answer":3,"explanation":"Delays: 2 + 4 + 8 + 10 + 10 = 34s."},{"prompt":"A job retries **4 times** with delays of `min(5s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["65s","20s","80s","30s"],"answer":0,"explanation":"Delays: 5 + 10 + 20 + 30 = 65s."},{"prompt":"A job retries **6 times** with delays of `min(1s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["10s","64s","6s","35s"],"answer":3,"explanation":"Delays: 1 + 2 + 4 + 8 + 10 + 10 = 35s."},{"prompt":"A job retries **3 times** with delays of `min(3s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["19s","10s","9s","24s"],"answer":0,"explanation":"Delays: 3 + 6 + 10 = 19s."}]
---
# Design Drill: Retry schedules #9

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
