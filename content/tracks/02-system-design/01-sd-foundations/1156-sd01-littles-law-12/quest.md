---
slug: "sd01-littles-law-12"
title: "Design Drill: Little's law #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **650 requests/s**, and each takes **160 ms**. On average, how many requests are in flight at once?","options":["104","4.06","650","104,000"],"answer":0,"explanation":"650 × 0.16s = 104."},{"prompt":"An API handles **1100 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["682","1.77","682,000","1100"],"answer":0,"explanation":"1100 × 0.62s = 682."},{"prompt":"An API handles **2200 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["27.5","176","176,000","2200"],"answer":1,"explanation":"2200 × 0.08s = 176."},{"prompt":"An API handles **3000 requests/s**, and each takes **480 ms**. On average, how many requests are in flight at once?","options":["6.25","1.44 million","3000","1440"],"answer":3,"explanation":"3000 × 0.48s = 1440."},{"prompt":"An API handles **2200 requests/s**, and each takes **120 ms**. On average, how many requests are in flight at once?","options":["264","18.3","264,000","2200"],"answer":0,"explanation":"2200 × 0.12s = 264."}]
---
# Design Drill: Little's law #12

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
