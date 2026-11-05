---
slug: "sd05-backoff-5"
title: "Design Drill: Retry schedules #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **3 times** with delays of `min(1s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["3s","7s","8s","4s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 = 7s."},{"prompt":"A job retries **5 times** with delays of `min(5s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["80s","160s","25s","155s"],"answer":3,"explanation":"Delays: 5 + 10 + 20 + 40 + 80 = 155s."},{"prompt":"A job retries **6 times** with delays of `min(3s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["18s","192s","10s","49s"],"answer":3,"explanation":"Delays: 3 + 6 + 10 + 10 + 10 + 10 = 49s."},{"prompt":"A job retries **5 times** with delays of `min(5s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["155s","25s","80s","160s"],"answer":0,"explanation":"Delays: 5 + 10 + 20 + 40 + 80 = 155s."},{"prompt":"A job retries **4 times** with delays of `min(3s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["12s","48s","24s","45s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 + 24 = 45s."}]
---
# Design Drill: Retry schedules #5

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
