---
slug: "sd01-littles-law-5"
title: "Design Drill: Little's law #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2750 requests/s**, and each takes **100 ms**. On average, how many requests are in flight at once?","options":["2750","275","275,000","27.5"],"answer":1,"explanation":"2750 × 0.1s = 275."},{"prompt":"An API handles **650 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["182,000","650","182","2.32"],"answer":2,"explanation":"650 × 0.28s = 182."},{"prompt":"An API handles **2050 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["2050","3.31","1.27 million","1270"],"answer":3,"explanation":"2050 × 0.62s = 1270."},{"prompt":"An API handles **600 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["2.14","168","600","168,000"],"answer":1,"explanation":"600 × 0.28s = 168."},{"prompt":"An API handles **250 requests/s**, and each takes **40 ms**. On average, how many requests are in flight at once?","options":["6.25","10,000","250","10"],"answer":3,"explanation":"250 × 0.04s = 10."}]
---
# Design Drill: Little's law #5

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
