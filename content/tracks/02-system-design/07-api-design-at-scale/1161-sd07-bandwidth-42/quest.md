---
slug: "sd07-bandwidth-42"
title: "Design Drill: API bandwidth #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3300 req/s** with **460 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1520 Mbit/s","12100000 Mbit/s","12100 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **700 req/s** with **385 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["2160 Mbit/s","33.7 Mbit/s","270000 Mbit/s","270 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **500 req/s** with **350 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["280 Mbit/s","280000 Mbit/s","1400 Mbit/s","35 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3900 req/s** with **280 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1750000 Mbit/s","8740 Mbit/s","1750 Mbit/s","218 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1200 req/s** with **380 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["730 Mbit/s","91.2 Mbit/s","3650 Mbit/s","730000 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #42

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
