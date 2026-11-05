---
slug: "sd07-bandwidth-57"
title: "Design Drill: API bandwidth #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **700 req/s** with **130 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["91 Mbit/s","11.4 Mbit/s","91000 Mbit/s","728 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1600 req/s** with **160 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["256 Mbit/s","256000 Mbit/s","2050 Mbit/s","32 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4400 req/s** with **265 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["9330 Mbit/s","1870000 Mbit/s","1870 Mbit/s","233 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4300 req/s** with **125 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4300 Mbit/s","538 Mbit/s","4300000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **400 req/s** with **215 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["688000 Mbit/s","86 Mbit/s","688 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #57

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
