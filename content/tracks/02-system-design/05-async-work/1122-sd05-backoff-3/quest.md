---
slug: "sd05-backoff-3"
title: "Design Drill: Retry schedules #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"A job retries **5 times** with delays of `min(3s × 2^attempt, 1000s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["48s","96s","93s","15s"],"answer":2,"explanation":"Delays: 3 + 6 + 12 + 24 + 48 = 93s."},{"prompt":"A job retries **7 times** with delays of `min(1s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["10s","45s","7s","128s"],"answer":1,"explanation":"Delays: 1 + 2 + 4 + 8 + 10 + 10 + 10 = 45s."},{"prompt":"A job retries **7 times** with delays of `min(5s × 2^attempt, 60s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["35s","60s","640s","255s"],"answer":3,"explanation":"Delays: 5 + 10 + 20 + 40 + 60 + 60 + 60 = 255s."},{"prompt":"A job retries **4 times** with delays of `min(5s × 2^attempt, 120s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["75s","80s","40s","20s"],"answer":0,"explanation":"Delays: 5 + 10 + 20 + 40 = 75s."},{"prompt":"A job retries **7 times** with delays of `min(5s × 2^attempt, 10s)` (attempt = 0, 1, 2…), without jitter. How long does it wait in total before the last retry?","options":["65s","35s","640s","10s"],"answer":0,"explanation":"Delays: 5 + 10 + 10 + 10 + 10 + 10 + 10 = 65s."}]
---
# Design Drill: Retry schedules #3

Exponential backoff waits base × 2^attempt between retries (attempt counts from 0), usually capped and with random jitter added. Total wait = the sum of the delays.
