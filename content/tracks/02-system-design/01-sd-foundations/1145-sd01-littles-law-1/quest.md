---
slug: "sd01-littles-law-1"
title: "Design Drill: Little's law #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1600 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["1020","1600","1.02 million","2.5"],"answer":0,"explanation":"1600 × 0.64s = 1020."},{"prompt":"An API handles **2650 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["689,000","2650","10.2","689"],"answer":3,"explanation":"2650 × 0.26s = 689."},{"prompt":"An API handles **1950 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["1.56 million","2.44","1950","1560"],"answer":3,"explanation":"1950 × 0.8s = 1560."},{"prompt":"An API handles **400 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["168,000","168","400","0.952"],"answer":1,"explanation":"400 × 0.42s = 168."},{"prompt":"An API handles **1550 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["806,000","1550","2.98","806"],"answer":3,"explanation":"1550 × 0.52s = 806."}]
---
# Design Drill: Little's law #1

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
