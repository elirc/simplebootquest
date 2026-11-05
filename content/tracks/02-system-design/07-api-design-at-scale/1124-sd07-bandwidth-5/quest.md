---
slug: "sd07-bandwidth-5"
title: "Design Drill: API bandwidth #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4400 req/s** with **85 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["2990 Mbit/s","598000 Mbit/s","74.8 Mbit/s","598 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3700 req/s** with **470 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["348 Mbit/s","2780000 Mbit/s","2780 Mbit/s","13900 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2400 req/s** with **340 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["163 Mbit/s","1310 Mbit/s","6530 Mbit/s","1310000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2100 req/s** with **120 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["2020 Mbit/s","31.5 Mbit/s","252000 Mbit/s","252 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **4100 req/s** with **360 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["11800 Mbit/s","11800000 Mbit/s","1480 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #5

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
