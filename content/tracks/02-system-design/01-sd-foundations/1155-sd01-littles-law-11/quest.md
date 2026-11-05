---
slug: "sd01-littles-law-11"
title: "Design Drill: Little's law #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1550 requests/s**, and each takes **740 ms**. On average, how many requests are in flight at once?","options":["1550","2.09","1150","1.15 million"],"answer":2,"explanation":"1550 × 0.74s = 1150."},{"prompt":"An API handles **1600 requests/s**, and each takes **380 ms**. On average, how many requests are in flight at once?","options":["608","4.21","1600","608,000"],"answer":0,"explanation":"1600 × 0.38s = 608."},{"prompt":"An API handles **1900 requests/s**, and each takes **220 ms**. On average, how many requests are in flight at once?","options":["8.64","1900","418,000","418"],"answer":3,"explanation":"1900 × 0.22s = 418."},{"prompt":"An API handles **300 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["162,000","300","162","0.556"],"answer":2,"explanation":"300 × 0.54s = 162."},{"prompt":"An API handles **2200 requests/s**, and each takes **560 ms**. On average, how many requests are in flight at once?","options":["3.93","2200","1.23 million","1230"],"answer":3,"explanation":"2200 × 0.56s = 1230."}]
---
# Design Drill: Little's law #11

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
