---
slug: "sd07-bandwidth-21"
title: "Design Drill: API bandwidth #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4200 req/s** with **460 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["3090 Mbit/s","3090000 Mbit/s","386 Mbit/s","15500 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **400 req/s** with **330 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["211 Mbit/s","1060 Mbit/s","211000 Mbit/s","26.4 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1000 req/s** with **215 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["344000 Mbit/s","43 Mbit/s","1720 Mbit/s","344 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2400 req/s** with **245 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["73.5 Mbit/s","588000 Mbit/s","4700 Mbit/s","588 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1900 req/s** with **285 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["542 Mbit/s","67.7 Mbit/s","4330 Mbit/s","542000 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #21

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
