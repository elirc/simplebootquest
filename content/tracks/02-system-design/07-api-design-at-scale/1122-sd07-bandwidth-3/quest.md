---
slug: "sd07-bandwidth-3"
title: "Design Drill: API bandwidth #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **500 req/s** with **235 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["188 Mbit/s","188000 Mbit/s","940 Mbit/s","23.5 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **2200 req/s** with **380 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["836 Mbit/s","836000 Mbit/s","105 Mbit/s","6690 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4000 req/s** with **25 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["100000 Mbit/s","800 Mbit/s","12.5 Mbit/s","100 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **4400 req/s** with **30 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1060 Mbit/s","211000 Mbit/s","211 Mbit/s","26.4 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2000 req/s** with **470 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["940 Mbit/s","940000 Mbit/s","118 Mbit/s","7520 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #3

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
