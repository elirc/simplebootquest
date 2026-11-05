---
slug: "sd07-bandwidth-48"
title: "Design Drill: API bandwidth #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3000 req/s** with **150 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["450000 Mbit/s","56.3 Mbit/s","450 Mbit/s","3600 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2300 req/s** with **240 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["552000 Mbit/s","552 Mbit/s","4420 Mbit/s","69 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2400 req/s** with **265 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["5090000 Mbit/s","636 Mbit/s","5090 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4000 req/s** with **255 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1630 Mbit/s","204 Mbit/s","8160 Mbit/s","1630000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1300 req/s** with **455 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["946 Mbit/s","946000 Mbit/s","118 Mbit/s","4730 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #48

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
