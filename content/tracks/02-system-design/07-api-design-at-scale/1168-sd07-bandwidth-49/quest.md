---
slug: "sd07-bandwidth-49"
title: "Design Drill: API bandwidth #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2200 req/s** with **290 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["638 Mbit/s","5100 Mbit/s","5100000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4700 req/s** with **55 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["2070 Mbit/s","414 Mbit/s","414000 Mbit/s","51.7 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2000 req/s** with **190 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3040 Mbit/s","3040000 Mbit/s","380 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2000 req/s** with **210 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3360 Mbit/s","420 Mbit/s","3360000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **400 req/s** with **345 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["27.6 Mbit/s","1100 Mbit/s","221000 Mbit/s","221 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #49

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
