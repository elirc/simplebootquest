---
slug: "sd01-littles-law-55"
title: "Design Drill: Little's law #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1650 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["891","891,000","3.06","1650"],"answer":0,"explanation":"1650 × 0.54s = 891."},{"prompt":"An API handles **1300 requests/s**, and each takes **700 ms**. On average, how many requests are in flight at once?","options":["910","1300","910,000","1.86"],"answer":0,"explanation":"1300 × 0.7s = 910."},{"prompt":"An API handles **550 requests/s**, and each takes **380 ms**. On average, how many requests are in flight at once?","options":["550","1.45","209,000","209"],"answer":3,"explanation":"550 × 0.38s = 209."},{"prompt":"An API handles **300 requests/s**, and each takes **720 ms**. On average, how many requests are in flight at once?","options":["216","0.417","300","216,000"],"answer":0,"explanation":"300 × 0.72s = 216."},{"prompt":"An API handles **2400 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["1010","2400","5.71","1.01 million"],"answer":0,"explanation":"2400 × 0.42s = 1010."}]
---
# Design Drill: Little's law #55

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
