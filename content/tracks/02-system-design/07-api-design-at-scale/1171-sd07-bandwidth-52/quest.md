---
slug: "sd07-bandwidth-52"
title: "Design Drill: API bandwidth #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2400 req/s** with **310 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["149 Mbit/s","1190000 Mbit/s","1190 Mbit/s","5950 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1400 req/s** with **160 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1790 Mbit/s","358000 Mbit/s","358 Mbit/s","44.8 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **5000 req/s** with **185 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["116 Mbit/s","7400 Mbit/s","925 Mbit/s","925000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **3900 req/s** with **245 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["7640 Mbit/s","7640000 Mbit/s","956 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **3100 req/s** with **310 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["961000 Mbit/s","120 Mbit/s","7690 Mbit/s","961 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #52

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
