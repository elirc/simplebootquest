---
slug: "sd07-bandwidth-41"
title: "Design Drill: API bandwidth #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **100 req/s** with **365 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["292 Mbit/s","4.56 Mbit/s","36500 Mbit/s","36.5 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **800 req/s** with **220 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1410 Mbit/s","176 Mbit/s","22 Mbit/s","176000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2900 req/s** with **280 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["6500 Mbit/s","162 Mbit/s","1300000 Mbit/s","1300 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2100 req/s** with **20 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["42 Mbit/s","336000 Mbit/s","336 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **3100 req/s** with **175 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4340 Mbit/s","543 Mbit/s","4340000 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #41

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
