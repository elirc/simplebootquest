---
slug: "sd01-littles-law-33"
title: "Design Drill: Little's law #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2200 requests/s**, and each takes **660 ms**. On average, how many requests are in flight at once?","options":["2200","1.45 million","1450","3.33"],"answer":2,"explanation":"2200 × 0.66s = 1450."},{"prompt":"An API handles **2600 requests/s**, and each takes **160 ms**. On average, how many requests are in flight at once?","options":["16.3","416","2600","416,000"],"answer":1,"explanation":"2600 × 0.16s = 416."},{"prompt":"An API handles **350 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["0.833","147","147,000","350"],"answer":1,"explanation":"350 × 0.42s = 147."},{"prompt":"An API handles **2050 requests/s**, and each takes **660 ms**. On average, how many requests are in flight at once?","options":["1350","2050","3.11","1.35 million"],"answer":0,"explanation":"2050 × 0.66s = 1350."},{"prompt":"An API handles **2300 requests/s**, and each takes **100 ms**. On average, how many requests are in flight at once?","options":["2300","230,000","23","230"],"answer":3,"explanation":"2300 × 0.1s = 230."}]
---
# Design Drill: Little's law #33

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
