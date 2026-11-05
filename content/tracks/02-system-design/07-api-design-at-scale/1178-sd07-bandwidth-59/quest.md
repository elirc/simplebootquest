---
slug: "sd07-bandwidth-59"
title: "Design Drill: API bandwidth #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3100 req/s** with **405 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["10000 Mbit/s","251 Mbit/s","2010000 Mbit/s","2010 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **500 req/s** with **350 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["21.9 Mbit/s","175 Mbit/s","175000 Mbit/s","1400 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **800 req/s** with **15 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["96000 Mbit/s","96 Mbit/s","12 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **900 req/s** with **455 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["81.9 Mbit/s","3280 Mbit/s","655000 Mbit/s","655 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2000 req/s** with **160 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["320 Mbit/s","2560000 Mbit/s","2560 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #59

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
