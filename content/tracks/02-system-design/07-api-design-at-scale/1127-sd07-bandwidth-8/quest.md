---
slug: "sd07-bandwidth-8"
title: "Design Drill: API bandwidth #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1000 req/s** with **355 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["355 Mbit/s","2840000 Mbit/s","2840 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4200 req/s** with **470 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["15800 Mbit/s","1970 Mbit/s","15800000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4900 req/s** with **250 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1230 Mbit/s","1230000 Mbit/s","9800 Mbit/s","153 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3000 req/s** with **400 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["9600 Mbit/s","1920 Mbit/s","240 Mbit/s","1920000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **3500 req/s** with **175 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4900 Mbit/s","4900000 Mbit/s","613 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #8

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
