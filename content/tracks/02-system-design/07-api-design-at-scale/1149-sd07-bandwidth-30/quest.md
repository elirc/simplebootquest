---
slug: "sd07-bandwidth-30"
title: "Design Drill: API bandwidth #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3200 req/s** with **400 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["10200 Mbit/s","10200000 Mbit/s","1280 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1200 req/s** with **50 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["480 Mbit/s","12 Mbit/s","96 Mbit/s","96000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4000 req/s** with **435 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["13900 Mbit/s","1740 Mbit/s","218 Mbit/s","1740000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **3800 req/s** with **290 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1760000 Mbit/s","8820 Mbit/s","220 Mbit/s","1760 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3200 req/s** with **165 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["66 Mbit/s","528000 Mbit/s","4220 Mbit/s","528 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #30

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
