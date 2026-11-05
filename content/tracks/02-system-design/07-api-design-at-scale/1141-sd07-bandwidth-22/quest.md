---
slug: "sd07-bandwidth-22"
title: "Design Drill: API bandwidth #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2800 req/s** with **145 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["406 Mbit/s","3250 Mbit/s","3250000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4300 req/s** with **455 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["15700000 Mbit/s","1960 Mbit/s","15700 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4900 req/s** with **260 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["2040000 Mbit/s","2040 Mbit/s","255 Mbit/s","10200 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **3200 req/s** with **125 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["640000 Mbit/s","640 Mbit/s","3200 Mbit/s","80 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4800 req/s** with **400 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["15400 Mbit/s","1920 Mbit/s","15400000 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #22

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
