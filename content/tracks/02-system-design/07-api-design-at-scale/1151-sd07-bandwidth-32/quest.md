---
slug: "sd07-bandwidth-32"
title: "Design Drill: API bandwidth #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2300 req/s** with **65 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["150000 Mbit/s","1200 Mbit/s","18.7 Mbit/s","150 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3600 req/s** with **130 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3740 Mbit/s","3740000 Mbit/s","468 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1500 req/s** with **315 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["59.1 Mbit/s","473000 Mbit/s","3780 Mbit/s","473 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2600 req/s** with **320 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["104 Mbit/s","6660 Mbit/s","832 Mbit/s","832000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **3300 req/s** with **445 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["11700 Mbit/s","2350000 Mbit/s","2350 Mbit/s","294 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #32

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
