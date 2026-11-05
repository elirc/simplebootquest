---
slug: "sd07-bandwidth-35"
title: "Design Drill: API bandwidth #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **600 req/s** with **270 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["32.4 Mbit/s","259 Mbit/s","1300 Mbit/s","259000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4400 req/s** with **380 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["13400000 Mbit/s","13400 Mbit/s","1670 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **200 req/s** with **130 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["26000 Mbit/s","208 Mbit/s","3.25 Mbit/s","26 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3300 req/s** with **50 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1320000 Mbit/s","1320 Mbit/s","165 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **100 req/s** with **100 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["16000 Mbit/s","80 Mbit/s","2 Mbit/s","16 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #35

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
