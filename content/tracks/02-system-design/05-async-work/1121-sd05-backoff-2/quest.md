---
slug: "sd05-backoff-2"
title: "Design Drill: Retry schedules #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **4 times** with delays of `min(2s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["8s","16s","32s","30s"],"answer":3,"explanation":"Delays: 2 + 4 + 8 + 16 = 30s."},{"prompt":"A job retries **4 times** with delays of `min(2s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["32s","24s","8s","10s"],"answer":1,"explanation":"Delays: 2 + 4 + 8 + 10 = 24s."},{"prompt":"A job retries **5 times** with delays of `min(1s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["5s","31s","16s","32s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 = 31s."},{"prompt":"A job retries **5 times** with delays of `min(1s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["32s","31s","16s","5s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 + 8 + 16 = 31s."},{"prompt":"A job retries **6 times** with delays of `min(3s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["60s","192s","153s","18s"],"answer":2,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 + 60 = 153s."}]
---
# Design Drill: Retry schedules #2

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
