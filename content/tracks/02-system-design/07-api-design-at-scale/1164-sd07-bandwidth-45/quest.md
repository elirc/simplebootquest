---
slug: "sd07-bandwidth-45"
title: "Design Drill: API bandwidth #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4400 req/s** with **405 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["14300 Mbit/s","356 Mbit/s","2850000 Mbit/s","2850 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1400 req/s** with **410 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["4590 Mbit/s","115 Mbit/s","918000 Mbit/s","918 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3700 req/s** with **75 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["2220000 Mbit/s","2220 Mbit/s","278 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2000 req/s** with **280 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4480 Mbit/s","4480000 Mbit/s","560 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **300 req/s** with **255 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["612000 Mbit/s","612 Mbit/s","76.5 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #45

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
