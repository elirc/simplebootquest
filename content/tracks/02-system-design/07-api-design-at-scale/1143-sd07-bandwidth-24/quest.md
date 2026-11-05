---
slug: "sd07-bandwidth-24"
title: "Design Drill: API bandwidth #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3700 req/s** with **320 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1180 Mbit/s","9470 Mbit/s","148 Mbit/s","1180000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3500 req/s** with **70 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1960 Mbit/s","1960000 Mbit/s","245 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2400 req/s** with **5 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["96 Mbit/s","19.2 Mbit/s","19200 Mbit/s","2.4 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **1100 req/s** with **400 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3520 Mbit/s","440 Mbit/s","3520000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3500 req/s** with **170 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["119 Mbit/s","952 Mbit/s","4760 Mbit/s","952000 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #24

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
