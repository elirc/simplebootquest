---
slug: "sd07-bandwidth-60"
title: "Design Drill: API bandwidth #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2300 req/s** with **135 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["2480000 Mbit/s","311 Mbit/s","2480 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4500 req/s** with **175 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["6300 Mbit/s","1260 Mbit/s","1260000 Mbit/s","158 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2500 req/s** with **25 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["100000 Mbit/s","12.5 Mbit/s","500 Mbit/s","100 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3100 req/s** with **115 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["570 Mbit/s","71.3 Mbit/s","2850 Mbit/s","570000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **400 req/s** with **40 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["25.6 Mbit/s","128 Mbit/s","3.2 Mbit/s","25600 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #60

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
