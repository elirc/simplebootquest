---
slug: "sd01-littles-law-54"
title: "Design Drill: Little's law #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1800 requests/s**, and each takes **220 ms**. On average, how many requests are in flight at once?","options":["396","8.18","396,000","1800"],"answer":0,"explanation":"1800 × 0.22s = 396."},{"prompt":"An API handles **400 requests/s**, and each takes **40 ms**. On average, how many requests are in flight at once?","options":["400","16,000","10","16"],"answer":3,"explanation":"400 × 0.04s = 16."},{"prompt":"An API handles **200 requests/s**, and each takes **620 ms**. On average, how many requests are in flight at once?","options":["124","200","0.323","124,000"],"answer":0,"explanation":"200 × 0.62s = 124."},{"prompt":"An API handles **900 requests/s**, and each takes **560 ms**. On average, how many requests are in flight at once?","options":["1.61","504,000","900","504"],"answer":3,"explanation":"900 × 0.56s = 504."},{"prompt":"An API handles **2500 requests/s**, and each takes **380 ms**. On average, how many requests are in flight at once?","options":["950","6.58","950,000","2500"],"answer":0,"explanation":"2500 × 0.38s = 950."}]
---
# Design Drill: Little's law #54

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
