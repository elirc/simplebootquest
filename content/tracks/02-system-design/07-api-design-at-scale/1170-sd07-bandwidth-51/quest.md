---
slug: "sd07-bandwidth-51"
title: "Design Drill: API bandwidth #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **2500 req/s** with **330 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["825000 Mbit/s","103 Mbit/s","825 Mbit/s","6600 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **1300 req/s** with **95 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["988 Mbit/s","24.7 Mbit/s","198 Mbit/s","198000 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4000 req/s** with **470 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["15000000 Mbit/s","15000 Mbit/s","1880 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **400 req/s** with **360 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1150 Mbit/s","144 Mbit/s","144000 Mbit/s","18 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2600 req/s** with **100 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["52 Mbit/s","2080 Mbit/s","416000 Mbit/s","416 Mbit/s"],"answer":3}]
---
# Design Drill: API bandwidth #51

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
