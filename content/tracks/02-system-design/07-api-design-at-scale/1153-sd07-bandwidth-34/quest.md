---
slug: "sd07-bandwidth-34"
title: "Design Drill: API bandwidth #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **900 req/s** with **175 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["19.7 Mbit/s","1260 Mbit/s","158 Mbit/s","158000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4200 req/s** with **90 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["3020 Mbit/s","75.6 Mbit/s","605000 Mbit/s","605 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **800 req/s** with **35 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["28 Mbit/s","224 Mbit/s","28000 Mbit/s","3.5 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2800 req/s** with **335 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["7500 Mbit/s","7500000 Mbit/s","938 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2200 req/s** with **90 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["39.6 Mbit/s","317000 Mbit/s","1580 Mbit/s","317 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #34

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
