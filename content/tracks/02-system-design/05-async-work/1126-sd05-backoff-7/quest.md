---
slug: "sd05-backoff-7"
title: "Design Drill: Retry schedules #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **5 times** with delays of `min(5s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["10s","45s","25s","160s"],"answer":1,"explanation":"Delays: 5 + 10 + 10 + 10 + 10 = 45s."},{"prompt":"A job retries **3 times** with delays of `min(1s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["8s","4s","7s","3s"],"answer":2,"explanation":"Delays: 1 + 2 + 4 = 7s."},{"prompt":"A job retries **7 times** with delays of `min(3s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["120s","384s","21s","309s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 + 96 + 120 = 309s."},{"prompt":"A job retries **6 times** with delays of `min(5s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["60s","30s","320s","195s"],"answer":3,"explanation":"Delays: 5 + 10 + 20 + 40 + 60 + 60 = 195s."},{"prompt":"A job retries **4 times** with delays of `min(5s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["80s","20s","40s","75s"],"answer":3,"explanation":"Delays: 5 + 10 + 20 + 40 = 75s."}]
---
# Design Drill: Retry schedules #7

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
