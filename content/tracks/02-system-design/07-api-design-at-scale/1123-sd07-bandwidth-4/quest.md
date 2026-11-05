---
slug: "sd07-bandwidth-4"
title: "Design Drill: API bandwidth #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4800 req/s** with **495 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["19000 Mbit/s","3800000 Mbit/s","475 Mbit/s","3800 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1100 req/s** with **340 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["2990 Mbit/s","374 Mbit/s","374000 Mbit/s","46.8 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4400 req/s** with **405 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["1780 Mbit/s","14300 Mbit/s","14300000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **200 req/s** with **200 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["40 Mbit/s","320 Mbit/s","320000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **200 req/s** with **385 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["9.63 Mbit/s","77 Mbit/s","77000 Mbit/s","616 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #4

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
