---
slug: "sd01-littles-law-57"
title: "Design Drill: Little's law #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1400 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["588,000","1400","3.33","588"],"answer":3,"explanation":"1400 × 0.42s = 588."},{"prompt":"An API handles **350 requests/s**, and each takes **720 ms**. On average, how many requests are in flight at once?","options":["252","350","252,000","0.486"],"answer":0,"explanation":"350 × 0.72s = 252."},{"prompt":"An API handles **1700 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["3.4","1700","850,000","850"],"answer":3,"explanation":"1700 × 0.5s = 850."},{"prompt":"An API handles **2200 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["2.89","1.67 million","1670","2200"],"answer":2,"explanation":"2200 × 0.76s = 1670."},{"prompt":"An API handles **2150 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["2.69","1.72 million","1720","2150"],"answer":2,"explanation":"2150 × 0.8s = 1720."}]
---
# Design Drill: Little's law #57

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
