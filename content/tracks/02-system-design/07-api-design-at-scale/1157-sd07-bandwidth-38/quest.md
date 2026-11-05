---
slug: "sd07-bandwidth-38"
title: "Design Drill: API bandwidth #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1100 req/s** with **60 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["13.2 Mbit/s","106000 Mbit/s","528 Mbit/s","106 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **3800 req/s** with **340 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["2070000 Mbit/s","258 Mbit/s","10300 Mbit/s","2070 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2800 req/s** with **155 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["3470 Mbit/s","54.3 Mbit/s","434 Mbit/s","434000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **600 req/s** with **100 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["96000 Mbit/s","96 Mbit/s","480 Mbit/s","12 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **1600 req/s** with **100 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["256 Mbit/s","256000 Mbit/s","1280 Mbit/s","32 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #38

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
