---
slug: "sd07-bandwidth-56"
title: "Design Drill: API bandwidth #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3600 req/s** with **350 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["10100 Mbit/s","1260 Mbit/s","10100000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2800 req/s** with **255 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1140000 Mbit/s","143 Mbit/s","5710 Mbit/s","1140 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1200 req/s** with **370 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3550000 Mbit/s","444 Mbit/s","3550 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **3000 req/s** with **220 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["5280 Mbit/s","660 Mbit/s","5280000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3200 req/s** with **25 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["128 Mbit/s","640 Mbit/s","128000 Mbit/s","16 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #56

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
