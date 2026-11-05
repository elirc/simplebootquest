---
slug: "sd01-littles-law-50"
title: "Design Drill: Little's law #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **850 requests/s**, and each takes **600 ms**. On average, how many requests are in flight at once?","options":["1.42","850","510,000","510"],"answer":3,"explanation":"850 × 0.6s = 510."},{"prompt":"An API handles **850 requests/s**, and each takes **700 ms**. On average, how many requests are in flight at once?","options":["1.21","595,000","595","850"],"answer":2,"explanation":"850 × 0.7s = 595."},{"prompt":"An API handles **400 requests/s**, and each takes **520 ms**. On average, how many requests are in flight at once?","options":["400","0.769","208,000","208"],"answer":3,"explanation":"400 × 0.52s = 208."},{"prompt":"An API handles **700 requests/s**, and each takes **300 ms**. On average, how many requests are in flight at once?","options":["210,000","700","2.33","210"],"answer":3,"explanation":"700 × 0.3s = 210."},{"prompt":"An API handles **800 requests/s**, and each takes **200 ms**. On average, how many requests are in flight at once?","options":["800","160,000","4","160"],"answer":3,"explanation":"800 × 0.2s = 160."}]
---
# Design Drill: Little's law #50

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
