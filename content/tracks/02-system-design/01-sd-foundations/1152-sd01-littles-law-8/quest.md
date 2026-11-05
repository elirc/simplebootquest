---
slug: "sd01-littles-law-8"
title: "Design Drill: Little's law #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **400 requests/s**, and each takes **100 ms**. On average, how many requests are in flight at once?","options":["400","4","40","40,000"],"answer":2,"explanation":"400 × 0.1s = 40."},{"prompt":"An API handles **2400 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["2400","1.25 million","4.62","1250"],"answer":3,"explanation":"2400 × 0.52s = 1250."},{"prompt":"An API handles **1800 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["2.65","1800","1.22 million","1220"],"answer":3,"explanation":"1800 × 0.68s = 1220."},{"prompt":"An API handles **2000 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["1240","3.23","2000","1.24 million"],"answer":0,"explanation":"2000 × 0.62s = 1240."},{"prompt":"An API handles **250 requests/s**, and each takes **180 ms**. On average, how many requests are in flight at once?","options":["250","45","1.39","45,000"],"answer":1,"explanation":"250 × 0.18s = 45."}]
---
# Design Drill: Little's law #8

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
