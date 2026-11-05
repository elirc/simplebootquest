---
slug: "sd05-backoff-14"
title: "Design Drill: Retry schedules #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **4 times** with delays of `min(3s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["24s","48s","12s","45s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 + 24 = 45s."},{"prompt":"A job retries **6 times** with delays of `min(5s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["275s","120s","320s","30s"],"answer":0,"explanation":"Delays: 5 + 10 + 20 + 40 + 80 + 120 = 275s."},{"prompt":"A job retries **6 times** with delays of `min(2s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["128s","12s","10s","44s"],"answer":3,"explanation":"Delays: 2 + 4 + 8 + 10 + 10 + 10 = 44s."},{"prompt":"A job retries **3 times** with delays of `min(5s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["20s","40s","15s","35s"],"answer":3,"explanation":"Delays: 5 + 10 + 20 = 35s."},{"prompt":"A job retries **7 times** with delays of `min(5s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["30s","155s","640s","35s"],"answer":1,"explanation":"Delays: 5 + 10 + 20 + 30 + 30 + 30 + 30 = 155s."}]
---
# Design Drill: Retry schedules #14

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
