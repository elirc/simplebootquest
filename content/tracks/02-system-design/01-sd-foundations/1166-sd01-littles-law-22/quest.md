---
slug: "sd01-littles-law-22"
title: "Design Drill: Little's law #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2350 requests/s**, and each takes **400 ms**. On average, how many requests are in flight at once?","options":["940,000","940","2350","5.88"],"answer":1,"explanation":"2350 × 0.4s = 940."},{"prompt":"An API handles **1150 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["713,000","713","1.85","1150"],"answer":1,"explanation":"1150 × 0.62s = 713."},{"prompt":"An API handles **2450 requests/s**, and each takes **40 ms**. On average, how many requests are in flight at once?","options":["2450","61.3","98","98,000"],"answer":2,"explanation":"2450 × 0.04s = 98."},{"prompt":"An API handles **1300 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["5","1300","338","338,000"],"answer":2,"explanation":"1300 × 0.26s = 338."},{"prompt":"An API handles **2400 requests/s**, and each takes **500 ms**. On average, how many requests are in flight at once?","options":["2400","1200","4.8","1.2 million"],"answer":1,"explanation":"2400 × 0.5s = 1200."}]
---
# Design Drill: Little's law #22

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
