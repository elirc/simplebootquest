---
slug: "sd01-littles-law-37"
title: "Design Drill: Little's law #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **200 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["56,000","56","200","0.714"],"answer":1,"explanation":"200 × 0.28s = 56."},{"prompt":"An API handles **1350 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["1350","270","6.75","270,000"],"answer":1,"explanation":"1350 × 0.2s = 270."},{"prompt":"An API handles **650 requests/s**, and each takes **40 ms**. On average, how many requests are in flight at once?","options":["650","26","26,000","16.3"],"answer":1,"explanation":"650 × 0.04s = 26."},{"prompt":"An API handles **800 requests/s**, and each takes **740 ms**. On average, how many requests are in flight at once?","options":["592,000","800","1.08","592"],"answer":3,"explanation":"800 × 0.74s = 592."},{"prompt":"An API handles **900 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["900","1.13","720","720,000"],"answer":2,"explanation":"900 × 0.8s = 720."}]
---
# Design Drill: Little's law #37

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
