---
slug: "sd01-littles-law-23"
title: "Design Drill: Little's law #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1050 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["1050","462,000","462","2.39"],"answer":2,"explanation":"1050 × 0.44s = 462."},{"prompt":"An API handles **1900 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["380,000","380","1900","9.5"],"answer":1,"explanation":"1900 × 0.2s = 380."},{"prompt":"An API handles **1600 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["832,000","3.08","832","1600"],"answer":2,"explanation":"1600 × 0.52s = 832."},{"prompt":"An API handles **2450 requests/s**, and each takes **780 ms**. On average, how many requests are in flight at once?","options":["3.14","2450","1.91 million","1910"],"answer":3,"explanation":"2450 × 0.78s = 1910."},{"prompt":"An API handles **2000 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["1 million","1000","2000","4"],"answer":1,"explanation":"2000 × 0.5s = 1000."}]
---
# Design Drill: Little's law #23

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
