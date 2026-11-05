---
slug: "sd01-littles-law-19"
title: "Design Drill: Little's law #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **450 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["90,000","2.25","90","450"],"answer":2,"explanation":"450 × 0.2s = 90."},{"prompt":"An API handles **350 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["350","28,000","28","4.38"],"answer":2,"explanation":"350 × 0.08s = 28."},{"prompt":"An API handles **1900 requests/s**, and each takes **140 ms**. On average, how many requests are in flight at once?","options":["266,000","266","1900","13.6"],"answer":1,"explanation":"1900 × 0.14s = 266."},{"prompt":"An API handles **2950 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["590","590,000","2950","14.8"],"answer":0,"explanation":"2950 × 0.2s = 590."},{"prompt":"An API handles **1450 requests/s**, and each takes **20 ms**. On average, how many requests are in flight at once?","options":["29","1450","29,000","72.5"],"answer":0,"explanation":"1450 × 0.02s = 29."}]
---
# Design Drill: Little's law #19

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
