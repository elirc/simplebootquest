---
slug: "sd01-littles-law-10"
title: "Design Drill: Little's law #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2700 requests/s**, and each takes **360 ms**. On average, how many requests are in flight at once?","options":["972","7.5","972,000","2700"],"answer":0,"explanation":"2700 × 0.36s = 972."},{"prompt":"An API handles **2900 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["580,000","14.5","2900","580"],"answer":3,"explanation":"2900 × 0.2s = 580."},{"prompt":"An API handles **550 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["242","1.25","550","242,000"],"answer":0,"explanation":"550 × 0.44s = 242."},{"prompt":"An API handles **2800 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["1740","1.74 million","2800","4.52"],"answer":0,"explanation":"2800 × 0.62s = 1740."},{"prompt":"An API handles **1100 requests/s**, and each takes **480 ms**. On average, how many requests are in flight at once?","options":["2.29","1100","528,000","528"],"answer":3,"explanation":"1100 × 0.48s = 528."}]
---
# Design Drill: Little's law #10

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
