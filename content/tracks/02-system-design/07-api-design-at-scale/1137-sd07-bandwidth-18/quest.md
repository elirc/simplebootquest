---
slug: "sd07-bandwidth-18"
title: "Design Drill: API bandwidth #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **900 req/s** with **265 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1910 Mbit/s","29.8 Mbit/s","239000 Mbit/s","239 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2900 req/s** with **465 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["10800 Mbit/s","1350 Mbit/s","10800000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2700 req/s** with **115 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["311 Mbit/s","311000 Mbit/s","2480 Mbit/s","38.8 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **500 req/s** with **225 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["900000 Mbit/s","113 Mbit/s","900 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **3000 req/s** with **380 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["228 Mbit/s","1820 Mbit/s","1820000 Mbit/s","9120 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #18

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
