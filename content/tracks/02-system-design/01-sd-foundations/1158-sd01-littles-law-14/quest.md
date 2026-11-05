---
slug: "sd01-littles-law-14"
title: "Design Drill: Little's law #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2550 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["2550","6.07","1070","1.07 million"],"answer":2,"explanation":"2550 × 0.42s = 1070."},{"prompt":"An API handles **1250 requests/s**, and each takes **20 ms**. On average, how many requests are in flight at once?","options":["25,000","62.5","1250","25"],"answer":3,"explanation":"1250 × 0.02s = 25."},{"prompt":"An API handles **2200 requests/s**, and each takes **140 ms**. On average, how many requests are in flight at once?","options":["308","2200","15.7","308,000"],"answer":0,"explanation":"2200 × 0.14s = 308."},{"prompt":"An API handles **650 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["195,000","650","2.17","195"],"answer":3,"explanation":"650 × 0.3s = 195."},{"prompt":"An API handles **2700 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["1.67 million","2700","4.35","1670"],"answer":3,"explanation":"2700 × 0.62s = 1670."}]
---
# Design Drill: Little's law #14

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
