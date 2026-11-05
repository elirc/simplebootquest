---
slug: "sd01-littles-law-32"
title: "Design Drill: Little's law #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2800 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["4.12","2800","1900","1.9 million"],"answer":2,"explanation":"2800 × 0.68s = 1900."},{"prompt":"An API handles **500 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["140","140,000","1.79","500"],"answer":0,"explanation":"500 × 0.28s = 140."},{"prompt":"An API handles **1550 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["5.96","403","403,000","1550"],"answer":1,"explanation":"1550 × 0.26s = 403."},{"prompt":"An API handles **150 requests/s**, and each takes **280 ms**. On average, how many requests are in flight at once?","options":["42,000","0.536","150","42"],"answer":3,"explanation":"150 × 0.28s = 42."},{"prompt":"An API handles **200 requests/s**, and each takes **480 ms**. On average, how many requests are in flight at once?","options":["96,000","0.417","96","200"],"answer":2,"explanation":"200 × 0.48s = 96."}]
---
# Design Drill: Little's law #32

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
