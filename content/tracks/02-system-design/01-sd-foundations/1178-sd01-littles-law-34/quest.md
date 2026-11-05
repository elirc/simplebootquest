---
slug: "sd01-littles-law-34"
title: "Design Drill: Little's law #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **550 requests/s**, and each takes **540 ms**. On average, how many requests are in flight at once?","options":["297","1.02","550","297,000"],"answer":0,"explanation":"550 × 0.54s = 297."},{"prompt":"An API handles **2750 requests/s**, and each takes **180 ms**. On average, how many requests are in flight at once?","options":["495","2750","495,000","15.3"],"answer":0,"explanation":"2750 × 0.18s = 495."},{"prompt":"An API handles **2550 requests/s**, and each takes **320 ms**. On average, how many requests are in flight at once?","options":["7.97","816,000","2550","816"],"answer":3,"explanation":"2550 × 0.32s = 816."},{"prompt":"An API handles **2150 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["4.89","2150","946,000","946"],"answer":3,"explanation":"2150 × 0.44s = 946."},{"prompt":"An API handles **2000 requests/s**, and each takes **260 ms**. On average, how many requests are in flight at once?","options":["7.69","2000","520,000","520"],"answer":3,"explanation":"2000 × 0.26s = 520."}]
---
# Design Drill: Little's law #34

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
