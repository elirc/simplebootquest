---
slug: "sd07-bandwidth-10"
title: "Design Drill: API bandwidth #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **100 req/s** with **155 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["3.1 Mbit/s","24800 Mbit/s","124 Mbit/s","24.8 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **200 req/s** with **270 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["54 Mbit/s","432 Mbit/s","54000 Mbit/s","6.75 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3200 req/s** with **150 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3840 Mbit/s","480 Mbit/s","3840000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1300 req/s** with **240 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["499000 Mbit/s","499 Mbit/s","62.4 Mbit/s","2500 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **400 req/s** with **440 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["176 Mbit/s","22 Mbit/s","176000 Mbit/s","1410 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #10

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
