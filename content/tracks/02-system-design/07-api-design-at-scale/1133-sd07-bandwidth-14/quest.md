---
slug: "sd07-bandwidth-14"
title: "Design Drill: API bandwidth #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4000 req/s** with **450 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["14400 Mbit/s","1800000 Mbit/s","1800 Mbit/s","225 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2800 req/s** with **225 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["5040 Mbit/s","630000 Mbit/s","78.8 Mbit/s","630 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **4300 req/s** with **270 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1860 Mbit/s","232 Mbit/s","1860000 Mbit/s","9290 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **600 req/s** with **30 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["144000 Mbit/s","144 Mbit/s","18 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **5000 req/s** with **425 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["3400000 Mbit/s","3400 Mbit/s","425 Mbit/s","17000 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #14

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
