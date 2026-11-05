---
slug: "sd07-bandwidth-12"
title: "Design Drill: API bandwidth #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4000 req/s** with **375 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["12000 Mbit/s","2400 Mbit/s","2400000 Mbit/s","300 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4400 req/s** with **500 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["2200000 Mbit/s","2200 Mbit/s","17600 Mbit/s","275 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2000 req/s** with **10 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["32000 Mbit/s","160 Mbit/s","32 Mbit/s","4 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **700 req/s** with **315 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["27.6 Mbit/s","221 Mbit/s","1760 Mbit/s","221000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **300 req/s** with **275 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["82500 Mbit/s","10.3 Mbit/s","82.5 Mbit/s","660 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #12

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
