---
slug: "sd07-bandwidth-15"
title: "Design Drill: API bandwidth #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3900 req/s** with **330 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1290 Mbit/s","10300 Mbit/s","1290000 Mbit/s","161 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **900 req/s** with **395 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["356000 Mbit/s","356 Mbit/s","2840 Mbit/s","44.4 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **3200 req/s** with **245 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["157 Mbit/s","6270 Mbit/s","1250000 Mbit/s","1250 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1400 req/s** with **485 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["5430000 Mbit/s","5430 Mbit/s","679 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **400 req/s** with **205 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["656000 Mbit/s","82 Mbit/s","656 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #15

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
