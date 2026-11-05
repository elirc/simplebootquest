---
slug: "sd07-bandwidth-44"
title: "Design Drill: API bandwidth #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **3400 req/s** with **360 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["9790000 Mbit/s","1220 Mbit/s","9790 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4400 req/s** with **420 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["14800000 Mbit/s","1850 Mbit/s","14800 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **2000 req/s** with **150 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["2400 Mbit/s","300 Mbit/s","37.5 Mbit/s","300000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2400 req/s** with **190 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["3650 Mbit/s","730000 Mbit/s","730 Mbit/s","91.2 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **200 req/s** with **445 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["89 Mbit/s","11.1 Mbit/s","89000 Mbit/s","712 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #44

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
