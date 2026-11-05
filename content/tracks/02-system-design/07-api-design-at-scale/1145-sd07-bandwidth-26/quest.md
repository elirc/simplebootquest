---
slug: "sd07-bandwidth-26"
title: "Design Drill: API bandwidth #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **700 req/s** with **205 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["144 Mbit/s","1150000 Mbit/s","1150 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4600 req/s** with **20 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["92000 Mbit/s","11.5 Mbit/s","736 Mbit/s","92 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2000 req/s** with **75 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["30 Mbit/s","240000 Mbit/s","240 Mbit/s","1200 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **200 req/s** with **320 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["12.8 Mbit/s","512 Mbit/s","102000 Mbit/s","102 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3300 req/s** with **445 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["184 Mbit/s","1470 Mbit/s","11700 Mbit/s","1470000 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #26

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
