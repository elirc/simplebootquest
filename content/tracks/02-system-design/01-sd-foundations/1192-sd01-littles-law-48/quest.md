---
slug: "sd01-littles-law-48"
title: "Design Drill: Little's law #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2950 requests/s**, and each takes **180 ms**. On average, how many requests are in flight at once?","options":["531","16.4","531,000","2950"],"answer":0,"explanation":"2950 × 0.18s = 531."},{"prompt":"An API handles **500 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["0.735","340,000","500","340"],"answer":3,"explanation":"500 × 0.68s = 340."},{"prompt":"An API handles **2500 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["1.25 million","2500","5","1250"],"answer":3,"explanation":"2500 × 0.5s = 1250."},{"prompt":"An API handles **1600 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["1600","416,000","416","6.15"],"answer":2,"explanation":"1600 × 0.26s = 416."},{"prompt":"An API handles **400 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["128","1.25","128,000","400"],"answer":0,"explanation":"400 × 0.32s = 128."}]
---
# Design Drill: Little's law #48

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
