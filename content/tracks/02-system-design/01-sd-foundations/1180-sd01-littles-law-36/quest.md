---
slug: "sd01-littles-law-36"
title: "Design Drill: Little's law #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2750 requests/s**, and each takes **140 ms**. On average, how many requests are in flight at once?","options":["2750","385,000","385","19.6"],"answer":2,"explanation":"2750 × 0.14s = 385."},{"prompt":"An API handles **2050 requests/s**, and each takes **120 ms**. On average, how many requests are in flight at once?","options":["2050","246,000","17.1","246"],"answer":3,"explanation":"2050 × 0.12s = 246."},{"prompt":"An API handles **150 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["0.288","78","150","78,000"],"answer":1,"explanation":"150 × 0.52s = 78."},{"prompt":"An API handles **900 requests/s**, and each takes **600 ms**. On average, how many requests are in flight at once?","options":["540,000","900","540","1.5"],"answer":2,"explanation":"900 × 0.6s = 540."},{"prompt":"An API handles **1900 requests/s**, and each takes **60 ms**. On average, how many requests are in flight at once?","options":["114,000","114","1900","31.7"],"answer":1,"explanation":"1900 × 0.06s = 114."}]
---
# Design Drill: Little's law #36

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
