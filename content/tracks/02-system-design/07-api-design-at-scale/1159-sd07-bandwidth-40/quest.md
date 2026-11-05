---
slug: "sd07-bandwidth-40"
title: "Design Drill: API bandwidth #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2400 req/s** with **365 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["7010 Mbit/s","876 Mbit/s","7010000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2600 req/s** with **105 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["2180 Mbit/s","273 Mbit/s","2180000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3000 req/s** with **445 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["10700 Mbit/s","167 Mbit/s","1340 Mbit/s","1340000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2800 req/s** with **495 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["277 Mbit/s","2220000 Mbit/s","11100 Mbit/s","2220 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **200 req/s** with **170 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["272 Mbit/s","34 Mbit/s","4.25 Mbit/s","34000 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #40

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
