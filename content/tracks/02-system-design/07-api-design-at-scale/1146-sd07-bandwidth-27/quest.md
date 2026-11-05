---
slug: "sd07-bandwidth-27"
title: "Design Drill: API bandwidth #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1100 req/s** with **475 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["4180 Mbit/s","836 Mbit/s","105 Mbit/s","836000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **1100 req/s** with **420 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["3700 Mbit/s","739000 Mbit/s","739 Mbit/s","92.4 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1000 req/s** with **375 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["3000 Mbit/s","375 Mbit/s","46.9 Mbit/s","375000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **3800 req/s** with **90 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["547 Mbit/s","68.4 Mbit/s","2740 Mbit/s","547000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **400 req/s** with **90 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["57600 Mbit/s","57.6 Mbit/s","288 Mbit/s","7.2 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #27

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
