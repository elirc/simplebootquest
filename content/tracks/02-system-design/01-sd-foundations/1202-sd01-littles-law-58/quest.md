---
slug: "sd01-littles-law-58"
title: "Design Drill: Little's law #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1100 requests/s**, and each takes **240 ms**. On average, how many requests are in flight at once?","options":["1100","4.58","264","264,000"],"answer":2,"explanation":"1100 × 0.24s = 264."},{"prompt":"An API handles **2300 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["1430","3.71","2300","1.43 million"],"answer":0,"explanation":"2300 × 0.62s = 1430."},{"prompt":"An API handles **850 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["442,000","1.63","850","442"],"answer":3,"explanation":"850 × 0.52s = 442."},{"prompt":"An API handles **1000 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["1000","440","2.27","440,000"],"answer":1,"explanation":"1000 × 0.44s = 440."},{"prompt":"An API handles **1400 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["5","1400","392","392,000"],"answer":2,"explanation":"1400 × 0.28s = 392."}]
---
# Design Drill: Little's law #58

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
