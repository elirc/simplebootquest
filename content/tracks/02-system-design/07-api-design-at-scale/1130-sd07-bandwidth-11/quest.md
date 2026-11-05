---
slug: "sd07-bandwidth-11"
title: "Design Drill: API bandwidth #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3000 req/s** with **65 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1560000 Mbit/s","195 Mbit/s","1560 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1900 req/s** with **40 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["76 Mbit/s","608000 Mbit/s","608 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1600 req/s** with **210 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["2690 Mbit/s","336 Mbit/s","2690000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3800 req/s** with **465 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["14100000 Mbit/s","14100 Mbit/s","1770 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **200 req/s** with **230 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["46 Mbit/s","368 Mbit/s","368000 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #11

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
