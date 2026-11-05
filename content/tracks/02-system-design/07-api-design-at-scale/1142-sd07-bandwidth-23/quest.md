---
slug: "sd07-bandwidth-23"
title: "Design Drill: API bandwidth #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3200 req/s** with **135 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["3460 Mbit/s","432000 Mbit/s","54 Mbit/s","432 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **400 req/s** with **80 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["4 Mbit/s","32 Mbit/s","32000 Mbit/s","256 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **3000 req/s** with **370 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["139 Mbit/s","1110 Mbit/s","1110000 Mbit/s","8880 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4300 req/s** with **360 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1550 Mbit/s","1550000 Mbit/s","194 Mbit/s","12400 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3900 req/s** with **55 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["215 Mbit/s","1720 Mbit/s","1720000 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #23

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
