---
slug: "sd01-littles-law-43"
title: "Design Drill: Little's law #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **400 requests/s**, and each takes **640 ms**. On average, how many requests are in flight at once?","options":["400","256,000","256","0.625"],"answer":2,"explanation":"400 × 0.64s = 256."},{"prompt":"An API handles **2800 requests/s**, and each takes **420 ms**. On average, how many requests are in flight at once?","options":["1180","1.18 million","6.67","2800"],"answer":0,"explanation":"2800 × 0.42s = 1180."},{"prompt":"An API handles **800 requests/s**, and each takes **760 ms**. On average, how many requests are in flight at once?","options":["1.05","608","800","608,000"],"answer":1,"explanation":"800 × 0.76s = 608."},{"prompt":"An API handles **2350 requests/s**, and each takes **160 ms**. On average, how many requests are in flight at once?","options":["14.7","2350","376","376,000"],"answer":2,"explanation":"2350 × 0.16s = 376."},{"prompt":"An API handles **1250 requests/s**, and each takes **600 ms**. On average, how many requests are in flight at once?","options":["2.08","750","1250","750,000"],"answer":1,"explanation":"1250 × 0.6s = 750."}]
---
# Design Drill: Little's law #43

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
