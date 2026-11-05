---
slug: "sd07-bandwidth-47"
title: "Design Drill: API bandwidth #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2200 req/s** with **255 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["112 Mbit/s","4490 Mbit/s","898 Mbit/s","898000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **700 req/s** with **400 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["2240 Mbit/s","280 Mbit/s","2240000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2600 req/s** with **340 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["884 Mbit/s","7070 Mbit/s","7070000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **1000 req/s** with **110 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["110000 Mbit/s","880 Mbit/s","110 Mbit/s","13.8 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **3900 req/s** with **385 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["12000 Mbit/s","1500 Mbit/s","12000000 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #47

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
