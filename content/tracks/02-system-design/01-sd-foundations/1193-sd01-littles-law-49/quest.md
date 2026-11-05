---
slug: "sd01-littles-law-49"
title: "Design Drill: Little's law #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **550 requests/s**, and each takes **20 ms**. On average, how many requests are in flight at once?","options":["27.5","550","11","11,000"],"answer":2,"explanation":"550 × 0.02s = 11."},{"prompt":"An API handles **150 requests/s**, and each takes **120 ms**. On average, how many requests are in flight at once?","options":["18","18,000","1.25","150"],"answer":0,"explanation":"150 × 0.12s = 18."},{"prompt":"An API handles **1800 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["972,000","972","1800","3.33"],"answer":1,"explanation":"1800 × 0.54s = 972."},{"prompt":"An API handles **1750 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["140","21.9","1750","140,000"],"answer":0,"explanation":"1750 × 0.08s = 140."},{"prompt":"An API handles **2000 requests/s**, and each takes **600 ms**. On average, how many requests are in flight at once?","options":["1.2 million","2000","3.33","1200"],"answer":3,"explanation":"2000 × 0.6s = 1200."}]
---
# Design Drill: Little's law #49

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
