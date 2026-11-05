---
slug: "sd07-bandwidth-36"
title: "Design Drill: API bandwidth #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2200 req/s** with **80 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1410 Mbit/s","176 Mbit/s","1410000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2700 req/s** with **375 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["8100 Mbit/s","1010 Mbit/s","8100000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1100 req/s** with **185 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["204 Mbit/s","1630 Mbit/s","204000 Mbit/s","25.4 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1200 req/s** with **225 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["270 Mbit/s","2160000 Mbit/s","2160 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **800 req/s** with **350 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["56 Mbit/s","2240 Mbit/s","448000 Mbit/s","448 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #36

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
