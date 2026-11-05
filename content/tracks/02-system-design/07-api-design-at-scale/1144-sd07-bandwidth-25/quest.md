---
slug: "sd07-bandwidth-25"
title: "Design Drill: API bandwidth #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **5000 req/s** with **395 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["247 Mbit/s","15800 Mbit/s","1980000 Mbit/s","1980 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1100 req/s** with **155 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1360000 Mbit/s","171 Mbit/s","1360 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **200 req/s** with **345 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["552000 Mbit/s","69 Mbit/s","552 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4200 req/s** with **435 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["2920000 Mbit/s","365 Mbit/s","2920 Mbit/s","14600 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2300 req/s** with **270 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4970000 Mbit/s","4970 Mbit/s","621 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #25

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
