---
slug: "sd01-littles-law-31"
title: "Design Drill: Little's law #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1250 requests/s**, and each takes **720 ms**. On average, how many requests are in flight at once?","options":["900,000","1.74","900","1250"],"answer":2,"explanation":"1250 × 0.72s = 900."},{"prompt":"An API handles **2850 requests/s**, and each takes **720 ms**. On average, how many requests are in flight at once?","options":["2.05 million","2050","3.96","2850"],"answer":1,"explanation":"2850 × 0.72s = 2050."},{"prompt":"An API handles **2650 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["1.64 million","4.27","1640","2650"],"answer":2,"explanation":"2650 × 0.62s = 1640."},{"prompt":"An API handles **2900 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["1970","1.97 million","4.26","2900"],"answer":0,"explanation":"2900 × 0.68s = 1970."},{"prompt":"An API handles **2300 requests/s**, and each takes **800 ms**. On average, how many requests are in flight at once?","options":["1840","2300","2.88","1.84 million"],"answer":0,"explanation":"2300 × 0.8s = 1840."}]
---
# Design Drill: Little's law #31

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
