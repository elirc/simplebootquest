---
slug: "sd07-bandwidth-20"
title: "Design Drill: API bandwidth #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2100 req/s** with **170 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["71.4 Mbit/s","571 Mbit/s","2860 Mbit/s","571000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2200 req/s** with **395 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["174 Mbit/s","6950 Mbit/s","1390000 Mbit/s","1390 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **900 req/s** with **90 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["81 Mbit/s","10.1 Mbit/s","81000 Mbit/s","648 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2000 req/s** with **345 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["690000 Mbit/s","86.3 Mbit/s","5520 Mbit/s","690 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2400 req/s** with **170 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["408000 Mbit/s","408 Mbit/s","3260 Mbit/s","51 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #20

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
