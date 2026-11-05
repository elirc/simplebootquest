---
slug: "sd05-backoff-19"
title: "Design Drill: Retry schedules #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **4 times** with delays of `min(3s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["24s","12s","48s","45s"],"answer":3,"explanation":"Delays: 3 + 6 + 12 + 24 = 45s."},{"prompt":"A job retries **4 times** with delays of `min(1s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["15s","16s","8s","4s"],"answer":0,"explanation":"Delays: 1 + 2 + 4 + 8 = 15s."},{"prompt":"A job retries **3 times** with delays of `min(5s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["20s","40s","35s","15s"],"answer":2,"explanation":"Delays: 5 + 10 + 20 = 35s."},{"prompt":"A job retries **5 times** with delays of `min(5s × 2^attempt, 30s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["95s","25s","30s","160s"],"answer":0,"explanation":"Delays: 5 + 10 + 20 + 30 + 30 = 95s."},{"prompt":"A job retries **6 times** with delays of `min(3s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["189s","96s","18s","192s"],"answer":0,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 + 96 = 189s."}]
---
# Design Drill: Retry schedules #19

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
