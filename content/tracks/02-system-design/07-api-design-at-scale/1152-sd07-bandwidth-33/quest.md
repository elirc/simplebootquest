---
slug: "sd07-bandwidth-33"
title: "Design Drill: API bandwidth #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1000 req/s** with **220 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1760 Mbit/s","27.5 Mbit/s","220000 Mbit/s","220 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **200 req/s** with **490 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["12.3 Mbit/s","784 Mbit/s","98 Mbit/s","98000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4900 req/s** with **100 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["490 Mbit/s","3920 Mbit/s","3920000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **1400 req/s** with **240 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["42 Mbit/s","2690 Mbit/s","336000 Mbit/s","336 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1800 req/s** with **270 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["486 Mbit/s","3890000 Mbit/s","3890 Mbit/s"],"answer":2}]
---
# Design Drill: API bandwidth #33

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
