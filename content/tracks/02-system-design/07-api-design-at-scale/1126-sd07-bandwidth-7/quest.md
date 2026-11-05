---
slug: "sd07-bandwidth-7"
title: "Design Drill: API bandwidth #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **600 req/s** with **150 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["720 Mbit/s","90 Mbit/s","720000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **800 req/s** with **190 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["1220 Mbit/s","19 Mbit/s","152000 Mbit/s","152 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **4700 req/s** with **135 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["5080 Mbit/s","127 Mbit/s","1020000 Mbit/s","1020 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2600 req/s** with **90 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["374 Mbit/s","374000 Mbit/s","1870 Mbit/s","46.8 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1500 req/s** with **300 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["3600 Mbit/s","3600000 Mbit/s","450 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #7

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
