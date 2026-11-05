---
slug: "sd07-bandwidth-54"
title: "Design Drill: API bandwidth #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3700 req/s** with **480 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["14200 Mbit/s","1780000 Mbit/s","222 Mbit/s","1780 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1900 req/s** with **275 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["523 Mbit/s","4180 Mbit/s","523000 Mbit/s","65.3 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1600 req/s** with **280 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["448 Mbit/s","3580000 Mbit/s","3580 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4300 req/s** with **200 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["6880000 Mbit/s","6880 Mbit/s","860 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4000 req/s** with **5 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["32 Mbit/s","32000 Mbit/s","4 Mbit/s","160 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #54

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
