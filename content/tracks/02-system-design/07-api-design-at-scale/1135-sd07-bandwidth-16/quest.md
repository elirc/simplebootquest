---
slug: "sd07-bandwidth-16"
title: "Design Drill: API bandwidth #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1200 req/s** with **475 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4560 Mbit/s","570 Mbit/s","4560000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2000 req/s** with **250 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["500000 Mbit/s","500 Mbit/s","4000 Mbit/s","62.5 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4700 req/s** with **130 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4890 Mbit/s","611 Mbit/s","4890000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1400 req/s** with **70 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["784000 Mbit/s","98 Mbit/s","784 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4600 req/s** with **465 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["17100 Mbit/s","2140000 Mbit/s","267 Mbit/s","2140 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #16

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
