---
slug: "sd07-bandwidth-28"
title: "Design Drill: API bandwidth #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1100 req/s** with **450 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["495 Mbit/s","61.9 Mbit/s","3960 Mbit/s","495000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3100 req/s** with **95 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["295 Mbit/s","2360 Mbit/s","2360000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **1900 req/s** with **315 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4790 Mbit/s","599 Mbit/s","4790000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **5000 req/s** with **395 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["15800000 Mbit/s","1980 Mbit/s","15800 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **900 req/s** with **120 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["864 Mbit/s","108 Mbit/s","864000 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #28

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
