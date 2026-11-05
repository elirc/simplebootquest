---
slug: "sd01-littles-law-25"
title: "Design Drill: Little's law #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2500 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["2500","750","750,000","8.33"],"answer":1,"explanation":"2500 × 0.3s = 750."},{"prompt":"An API handles **2300 requests/s**, and each takes **460 ms**. On average, how many requests are in flight at once?","options":["2300","5","1060","1.06 million"],"answer":2,"explanation":"2300 × 0.46s = 1060."},{"prompt":"An API handles **1400 requests/s**, and each takes **160 ms**. On average, how many requests are in flight at once?","options":["8.75","224","1400","224,000"],"answer":1,"explanation":"1400 × 0.16s = 224."},{"prompt":"An API handles **550 requests/s**, and each takes **740 ms**. On average, how many requests are in flight at once?","options":["407","407,000","550","0.743"],"answer":0,"explanation":"550 × 0.74s = 407."},{"prompt":"An API handles **1650 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["1650","528","528,000","5.16"],"answer":1,"explanation":"1650 × 0.32s = 528."}]
---
# Design Drill: Little's law #25

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
