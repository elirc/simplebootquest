---
slug: "sd07-bandwidth-39"
title: "Design Drill: API bandwidth #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **200 req/s** with **300 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["60000 Mbit/s","60 Mbit/s","7.5 Mbit/s","480 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **200 req/s** with **25 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["5 Mbit/s","40000 Mbit/s","40 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **3700 req/s** with **60 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1780000 Mbit/s","222 Mbit/s","1780 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2000 req/s** with **385 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["154 Mbit/s","6160 Mbit/s","1230000 Mbit/s","1230 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **5000 req/s** with **300 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["12000 Mbit/s","1500 Mbit/s","12000000 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #39

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
