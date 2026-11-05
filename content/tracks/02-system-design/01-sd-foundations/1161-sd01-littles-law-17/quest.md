---
slug: "sd01-littles-law-17"
title: "Design Drill: Little's law #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **700 requests/s**, and each takes **600 ms**. On average, how many requests are in flight at once?","options":["1.17","420","700","420,000"],"answer":1,"explanation":"700 × 0.6s = 420."},{"prompt":"An API handles **1500 requests/s**, and each takes **720 ms**. On average, how many requests are in flight at once?","options":["1080","1500","1.08 million","2.08"],"answer":0,"explanation":"1500 × 0.72s = 1080."},{"prompt":"An API handles **2100 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["588,000","588","2100","7.5"],"answer":1,"explanation":"2100 × 0.28s = 588."},{"prompt":"An API handles **1400 requests/s**, and each takes **460 ms**. On average, how many requests are in flight at once?","options":["3.04","644","1400","644,000"],"answer":1,"explanation":"1400 × 0.46s = 644."},{"prompt":"An API handles **800 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["512","800","1.25","512,000"],"answer":0,"explanation":"800 × 0.64s = 512."}]
---
# Design Drill: Little's law #17

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
