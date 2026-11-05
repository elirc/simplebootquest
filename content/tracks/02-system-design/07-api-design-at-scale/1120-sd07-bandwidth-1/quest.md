---
slug: "sd07-bandwidth-1"
title: "Design Drill: API bandwidth #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4700 req/s** with **400 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1880 Mbit/s","15000 Mbit/s","235 Mbit/s","1880000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **700 req/s** with **285 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1600 Mbit/s","1600000 Mbit/s","200 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4400 req/s** with **110 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["774 Mbit/s","3870 Mbit/s","96.8 Mbit/s","774000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3200 req/s** with **315 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["8060 Mbit/s","8060000 Mbit/s","1010 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **400 req/s** with **450 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1440000 Mbit/s","180 Mbit/s","1440 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #1

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
