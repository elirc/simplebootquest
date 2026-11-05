---
slug: "sd07-bandwidth-6"
title: "Design Drill: API bandwidth #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **1600 req/s** with **435 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["5570 Mbit/s","696 Mbit/s","5570000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4100 req/s** with **5 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["20.5 Mbit/s","164 Mbit/s","164000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4100 req/s** with **45 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1480000 Mbit/s","185 Mbit/s","1480 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2600 req/s** with **440 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["9150 Mbit/s","1830 Mbit/s","1830000 Mbit/s","229 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **800 req/s** with **445 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["71.2 Mbit/s","570 Mbit/s","570000 Mbit/s","2850 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #6

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
