---
slug: "sd01-littles-law-20"
title: "Design Drill: Little's law #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An API handles **2950 requests/s**, and each takes **140 ms**. On average, how many requests are in flight at once?","options":["21.1","2950","413,000","413"],"answer":3,"explanation":"2950 × 0.14s = 413."},{"prompt":"An API handles **950 requests/s**, and each takes **440 ms**. On average, how many requests are in flight at once?","options":["418","2.16","950","418,000"],"answer":0,"explanation":"950 × 0.44s = 418."},{"prompt":"An API handles **200 requests/s**, and each takes **40 ms**. On average, how many requests are in flight at once?","options":["5","200","8","8000"],"answer":2,"explanation":"200 × 0.04s = 8."},{"prompt":"An API handles **2650 requests/s**, and each takes **680 ms**. On average, how many requests are in flight at once?","options":["3.9","2650","1.8 million","1800"],"answer":3,"explanation":"2650 × 0.68s = 1800."},{"prompt":"An API handles **700 requests/s**, and each takes **80 ms**. On average, how many requests are in flight at once?","options":["700","8.75","56,000","56"],"answer":3,"explanation":"700 × 0.08s = 56."}]
---
# Design Drill: Little's law #20

**Little's law**: work in flight = arrival rate × time each item spends in the system. It sizes connection pools, worker counts and queues.
