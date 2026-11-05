---
slug: "sd07-bandwidth-17"
title: "Design Drill: API bandwidth #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **600 req/s** with **210 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1010 Mbit/s","1010000 Mbit/s","126 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **5000 req/s** with **100 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["800 Mbit/s","100 Mbit/s","4000 Mbit/s","800000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3900 req/s** with **275 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["8580000 Mbit/s","8580 Mbit/s","1070 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4100 req/s** with **225 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["923000 Mbit/s","115 Mbit/s","7380 Mbit/s","923 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **5000 req/s** with **360 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["14400 Mbit/s","14400000 Mbit/s","1800 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #17

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
