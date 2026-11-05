---
slug: "sd07-bandwidth-46"
title: "Design Drill: API bandwidth #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3800 req/s** with **440 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["13400 Mbit/s","13400000 Mbit/s","1670 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2000 req/s** with **245 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["61.3 Mbit/s","3920 Mbit/s","490000 Mbit/s","490 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1100 req/s** with **295 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["2600000 Mbit/s","325 Mbit/s","2600 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **900 req/s** with **5 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["4.5 Mbit/s","36 Mbit/s","36000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **1200 req/s** with **140 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["21 Mbit/s","168000 Mbit/s","168 Mbit/s","1340 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #46

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
