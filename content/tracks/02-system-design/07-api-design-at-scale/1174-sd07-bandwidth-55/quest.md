---
slug: "sd07-bandwidth-55"
title: "Design Drill: API bandwidth #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **500 req/s** with **265 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["16.6 Mbit/s","133 Mbit/s","133000 Mbit/s","1060 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **3800 req/s** with **310 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1880000 Mbit/s","9420 Mbit/s","1880 Mbit/s","236 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4500 req/s** with **425 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["383 Mbit/s","3060000 Mbit/s","3060 Mbit/s","15300 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2900 req/s** with **120 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["2780 Mbit/s","348 Mbit/s","2780000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2800 req/s** with **70 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["196000 Mbit/s","24.5 Mbit/s","1570 Mbit/s","196 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #55

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
