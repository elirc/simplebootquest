---
slug: "sd07-bandwidth-58"
title: "Design Drill: API bandwidth #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4300 req/s** with **155 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["83.3 Mbit/s","667 Mbit/s","667000 Mbit/s","5330 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4800 req/s** with **440 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["2110000 Mbit/s","16900 Mbit/s","2110 Mbit/s","264 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1100 req/s** with **95 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["105 Mbit/s","836 Mbit/s","836000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **3400 req/s** with **170 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["925 Mbit/s","4620 Mbit/s","925000 Mbit/s","116 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4000 req/s** with **310 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["9920 Mbit/s","1240 Mbit/s","155 Mbit/s","1240000 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #58

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
