---
slug: "sd01-littles-law-18"
title: "Design Drill: Little's law #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2900 requests/s**, and each takes **180 ms**. On average, how many requests are in flight at once?","options":["16.1","522,000","522","2900"],"answer":2,"explanation":"2900 × 0.18s = 522."},{"prompt":"An API handles **1700 requests/s**, and each takes **720 ms**. On average, how many requests are in flight at once?","options":["2.36","1.22 million","1220","1700"],"answer":2,"explanation":"1700 × 0.72s = 1220."},{"prompt":"An API handles **700 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["700","1.59","308","308,000"],"answer":2,"explanation":"700 × 0.44s = 308."},{"prompt":"An API handles **1300 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["1300","4.64","364","364,000"],"answer":2,"explanation":"1300 × 0.28s = 364."},{"prompt":"An API handles **2950 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["2950","3.88","2240","2.24 million"],"answer":2,"explanation":"2950 × 0.76s = 2240."}]
---
# Design Drill: Little's law #18

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
