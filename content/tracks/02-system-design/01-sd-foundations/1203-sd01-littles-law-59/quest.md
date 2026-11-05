---
slug: "sd01-littles-law-59"
title: "Design Drill: Little's law #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **950 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["3.65","247,000","247","950"],"answer":2,"explanation":"950 × 0.26s = 247."},{"prompt":"An API handles **1750 requests/s**, and each takes **240 ms**. On average, how many requests are in flight at once?","options":["7.29","420","1750","420,000"],"answer":1,"explanation":"1750 × 0.24s = 420."},{"prompt":"An API handles **200 requests/s**, and each takes **580 ms**. On average, how many requests are in flight at once?","options":["116,000","116","200","0.345"],"answer":1,"explanation":"200 × 0.58s = 116."},{"prompt":"An API handles **100 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["100","0.2","50,000","50"],"answer":3,"explanation":"100 × 0.5s = 50."},{"prompt":"An API handles **1450 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["1.91","1.1 million","1450","1100"],"answer":3,"explanation":"1450 × 0.76s = 1100."}]
---
# Design Drill: Little's law #59

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
