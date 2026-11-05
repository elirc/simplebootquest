---
slug: "sd07-bandwidth-50"
title: "Design Drill: API bandwidth #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3000 req/s** with **250 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["6000 Mbit/s","93.8 Mbit/s","750000 Mbit/s","750 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3700 req/s** with **170 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["629000 Mbit/s","5030 Mbit/s","629 Mbit/s","78.6 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1900 req/s** with **110 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["334000 Mbit/s","334 Mbit/s","41.8 Mbit/s","1670 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2600 req/s** with **475 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1240 Mbit/s","1240000 Mbit/s","9880 Mbit/s","154 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4300 req/s** with **460 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1980000 Mbit/s","1980 Mbit/s","15800 Mbit/s","247 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #50

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
