---
slug: "sd07-bandwidth-31"
title: "Design Drill: API bandwidth #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1600 req/s** with **415 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["5310 Mbit/s","5310000 Mbit/s","664 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4300 req/s** with **400 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["13800000 Mbit/s","13800 Mbit/s","1720 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4700 req/s** with **270 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1270000 Mbit/s","159 Mbit/s","1270 Mbit/s","10200 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4000 req/s** with **190 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["760 Mbit/s","6080000 Mbit/s","6080 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **3400 req/s** with **370 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["10100000 Mbit/s","10100 Mbit/s","1260 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #31

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
