---
slug: "sd07-bandwidth-37"
title: "Design Drill: API bandwidth #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1000 req/s** with **375 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3000000 Mbit/s","375 Mbit/s","3000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1700 req/s** with **160 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["2180000 Mbit/s","272 Mbit/s","2180 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1500 req/s** with **470 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1130 Mbit/s","141 Mbit/s","1130000 Mbit/s","5640 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2100 req/s** with **500 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1050000 Mbit/s","131 Mbit/s","1050 Mbit/s","8400 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1600 req/s** with **235 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["376 Mbit/s","376000 Mbit/s","47 Mbit/s","3010 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #37

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
