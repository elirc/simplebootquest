---
slug: "sd01-littles-law-30"
title: "Design Drill: Little's law #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1300 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["1300","832","832,000","2.03"],"answer":1,"explanation":"1300 × 0.64s = 832."},{"prompt":"An API handles **2350 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["752","7.34","2350","752,000"],"answer":0,"explanation":"2350 × 0.32s = 752."},{"prompt":"An API handles **2800 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["1.23 million","6.36","1230","2800"],"answer":2,"explanation":"2800 × 0.44s = 1230."},{"prompt":"An API handles **500 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["500","220,000","220","1.14"],"answer":2,"explanation":"500 × 0.44s = 220."},{"prompt":"An API handles **1600 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["3.2","800","1600","800,000"],"answer":1,"explanation":"1600 × 0.5s = 800."}]
---
# Design Drill: Little's law #30

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
