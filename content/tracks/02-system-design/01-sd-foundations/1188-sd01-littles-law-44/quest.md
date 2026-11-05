---
slug: "sd01-littles-law-44"
title: "Design Drill: Little's law #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2500 requests/s**, and each takes **660 ms**. On average, how many requests are in flight at once?","options":["2500","1650","3.79","1.65 million"],"answer":1,"explanation":"2500 × 0.66s = 1650."},{"prompt":"An API handles **2250 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["2250","3.63","1.4 million","1400"],"answer":3,"explanation":"2250 × 0.62s = 1400."},{"prompt":"An API handles **350 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["98,000","98","1.25","350"],"answer":1,"explanation":"350 × 0.28s = 98."},{"prompt":"An API handles **2400 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["3.16","2400","1820","1.82 million"],"answer":2,"explanation":"2400 × 0.76s = 1820."},{"prompt":"An API handles **300 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["0.441","204","300","204,000"],"answer":1,"explanation":"300 × 0.68s = 204."}]
---
# Design Drill: Little's law #44

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
