---
slug: "sd07-bandwidth-2"
title: "Design Drill: API bandwidth #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2200 req/s** with **285 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["5020 Mbit/s","627 Mbit/s","627000 Mbit/s","78.4 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4300 req/s** with **365 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["2510 Mbit/s","314 Mbit/s","2510000 Mbit/s","12600 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **100 req/s** with **460 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["73.6 Mbit/s","368 Mbit/s","9.2 Mbit/s","73600 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1800 req/s** with **380 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["5470 Mbit/s","5470000 Mbit/s","684 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3800 req/s** with **330 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["10000000 Mbit/s","10000 Mbit/s","1250 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #2

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
