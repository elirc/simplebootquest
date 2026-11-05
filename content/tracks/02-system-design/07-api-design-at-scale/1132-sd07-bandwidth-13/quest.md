---
slug: "sd07-bandwidth-13"
title: "Design Drill: API bandwidth #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1700 req/s** with **410 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["139 Mbit/s","1120000 Mbit/s","1120 Mbit/s","5580 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4900 req/s** with **425 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["16700000 Mbit/s","16700 Mbit/s","2080 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2000 req/s** with **325 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["650 Mbit/s","5200 Mbit/s","5200000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4500 req/s** with **495 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["17800000 Mbit/s","2230 Mbit/s","17800 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2500 req/s** with **425 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1060000 Mbit/s","1060 Mbit/s","8500 Mbit/s","133 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #13

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
