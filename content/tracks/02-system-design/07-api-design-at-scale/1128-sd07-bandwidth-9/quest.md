---
slug: "sd07-bandwidth-9"
title: "Design Drill: API bandwidth #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **5000 req/s** with **165 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["825 Mbit/s","6600000 Mbit/s","6600 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2000 req/s** with **375 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["6000000 Mbit/s","750 Mbit/s","6000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1500 req/s** with **40 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["480 Mbit/s","60 Mbit/s","480000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1400 req/s** with **85 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["119000 Mbit/s","119 Mbit/s","14.9 Mbit/s","952 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **200 req/s** with **95 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["19 Mbit/s","152000 Mbit/s","152 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #9

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
