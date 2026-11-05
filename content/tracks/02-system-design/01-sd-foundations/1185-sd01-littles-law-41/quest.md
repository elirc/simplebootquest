---
slug: "sd01-littles-law-41"
title: "Design Drill: Little's law #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1750 requests/s**, and each takes **400 ms**. On average, how many requests are in flight at once?","options":["700,000","4.38","1750","700"],"answer":3,"explanation":"1750 × 0.4s = 700."},{"prompt":"An API handles **2750 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["1760","1.76 million","2750","4.3"],"answer":0,"explanation":"2750 × 0.64s = 1760."},{"prompt":"An API handles **350 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["105,000","105","1.17","350"],"answer":1,"explanation":"350 × 0.3s = 105."},{"prompt":"An API handles **450 requests/s**, and each takes **240 ms**. On average, how many requests are in flight at once?","options":["1.88","450","108","108,000"],"answer":2,"explanation":"450 × 0.24s = 108."},{"prompt":"An API handles **1350 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["378","4.82","378,000","1350"],"answer":0,"explanation":"1350 × 0.28s = 378."}]
---
# Design Drill: Little's law #41

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
