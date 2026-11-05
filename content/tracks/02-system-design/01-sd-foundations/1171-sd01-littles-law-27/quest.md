---
slug: "sd01-littles-law-27"
title: "Design Drill: Little's law #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2550 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["8.5","2550","765","765,000"],"answer":2,"explanation":"2550 × 0.3s = 765."},{"prompt":"An API handles **1800 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["540","1800","6","540,000"],"answer":0,"explanation":"1800 × 0.3s = 540."},{"prompt":"An API handles **2300 requests/s**, and each takes **720 ms**. On average, how many requests are in flight at once?","options":["1.66 million","1660","3.19","2300"],"answer":1,"explanation":"2300 × 0.72s = 1660."},{"prompt":"An API handles **1250 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["375,000","4.17","1250","375"],"answer":3,"explanation":"1250 × 0.3s = 375."},{"prompt":"An API handles **1450 requests/s**, and each takes **380 ms**. On average, how many requests are in flight at once?","options":["551,000","1450","3.82","551"],"answer":3,"explanation":"1450 × 0.38s = 551."}]
---
# Design Drill: Little's law #27

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
