---
slug: "sd01-littles-law-29"
title: "Design Drill: Little's law #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **850 requests/s**, and each takes **560 ms**. On average, how many requests are in flight at once?","options":["1.52","476","850","476,000"],"answer":1,"explanation":"850 × 0.56s = 476."},{"prompt":"An API handles **2300 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["3.03","2300","1750","1.75 million"],"answer":2,"explanation":"2300 × 0.76s = 1750."},{"prompt":"An API handles **2650 requests/s**, and each takes **20 ms**. On average, how many requests are in flight at once?","options":["133","53,000","2650","53"],"answer":3,"explanation":"2650 × 0.02s = 53."},{"prompt":"An API handles **2300 requests/s**, and each takes **400 ms**. On average, how many requests are in flight at once?","options":["5.75","920,000","2300","920"],"answer":3,"explanation":"2300 × 0.4s = 920."},{"prompt":"An API handles **1300 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["104,000","104","16.3","1300"],"answer":1,"explanation":"1300 × 0.08s = 104."}]
---
# Design Drill: Little's law #29

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
