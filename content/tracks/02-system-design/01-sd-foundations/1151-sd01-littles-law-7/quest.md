---
slug: "sd01-littles-law-7"
title: "Design Drill: Little's law #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2950 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["2950","2.01 million","4.34","2010"],"answer":3,"explanation":"2950 × 0.68s = 2010."},{"prompt":"An API handles **2600 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["676,000","2600","676","10"],"answer":2,"explanation":"2600 × 0.26s = 676."},{"prompt":"An API handles **600 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["120,000","600","3","120"],"answer":3,"explanation":"600 × 0.2s = 120."},{"prompt":"An API handles **1450 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["1450","754","754,000","2.79"],"answer":1,"explanation":"1450 × 0.52s = 754."},{"prompt":"An API handles **2050 requests/s**, and each takes **460 ms**. On average, how many requests are in flight at once?","options":["4.46","943","2050","943,000"],"answer":1,"explanation":"2050 × 0.46s = 943."}]
---
# Design Drill: Little's law #7

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
