---
slug: "sd01-littles-law-42"
title: "Design Drill: Little's law #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1750 requests/s**, and each takes **40 ms**. On average, how many requests are in flight at once?","options":["43.8","70","1750","70,000"],"answer":1,"explanation":"1750 × 0.04s = 70."},{"prompt":"An API handles **600 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["252,000","600","1.43","252"],"answer":3,"explanation":"600 × 0.42s = 252."},{"prompt":"An API handles **1150 requests/s**, and each takes **700 ms**. On average, how many requests are in flight at once?","options":["805","805,000","1.64","1150"],"answer":0,"explanation":"1150 × 0.7s = 805."},{"prompt":"An API handles **2650 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["2650","848,000","8.28","848"],"answer":3,"explanation":"2650 × 0.32s = 848."},{"prompt":"An API handles **1750 requests/s**, and each takes **480 ms**. On average, how many requests are in flight at once?","options":["1750","3.65","840,000","840"],"answer":3,"explanation":"1750 × 0.48s = 840."}]
---
# Design Drill: Little's law #42

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
