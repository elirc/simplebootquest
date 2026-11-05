---
slug: "sd07-bandwidth-29"
title: "Design Drill: API bandwidth #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1900 req/s** with **240 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3650 Mbit/s","456 Mbit/s","3650000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4000 req/s** with **90 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["72 Mbit/s","576000 Mbit/s","576 Mbit/s","2880 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4200 req/s** with **365 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["12300 Mbit/s","1530 Mbit/s","12300000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1200 req/s** with **135 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1300000 Mbit/s","162 Mbit/s","1300 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4300 req/s** with **410 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["14100 Mbit/s","353 Mbit/s","2820 Mbit/s","2820000 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #29

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
