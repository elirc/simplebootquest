---
slug: "sd07-bandwidth-19"
title: "Design Drill: API bandwidth #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3100 req/s** with **305 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["189 Mbit/s","1510 Mbit/s","1510000 Mbit/s","7560 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **1000 req/s** with **285 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["456 Mbit/s","57 Mbit/s","456000 Mbit/s","2280 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1900 req/s** with **385 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["5850 Mbit/s","5850000 Mbit/s","732 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **400 req/s** with **115 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["46000 Mbit/s","46 Mbit/s","5.75 Mbit/s","368 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **200 req/s** with **390 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["78 Mbit/s","624 Mbit/s","624000 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #19

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
