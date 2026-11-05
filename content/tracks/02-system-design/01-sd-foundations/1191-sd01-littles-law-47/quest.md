---
slug: "sd01-littles-law-47"
title: "Design Drill: Little's law #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **1950 requests/s**, and each takes **700 ms**. On average, how many requests are in flight at once?","options":["1950","1370","1.36 million","2.79"],"answer":1,"explanation":"1950 × 0.7s = 1370."},{"prompt":"An API handles **1900 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["5.94","608,000","608","1900"],"answer":2,"explanation":"1900 × 0.32s = 608."},{"prompt":"An API handles **800 requests/s**, and each takes **60 ms**. On average, how many requests are in flight at once?","options":["13.3","48,000","800","48"],"answer":3,"explanation":"800 × 0.06s = 48."},{"prompt":"An API handles **600 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["192","600","1.88","192,000"],"answer":0,"explanation":"600 × 0.32s = 192."},{"prompt":"An API handles **950 requests/s**, and each takes **120 ms**. On average, how many requests are in flight at once?","options":["114,000","7.92","114","950"],"answer":2,"explanation":"950 × 0.12s = 114."}]
---
# Design Drill: Little's law #47

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
