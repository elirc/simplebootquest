---
slug: "sd07-bandwidth-53"
title: "Design Drill: API bandwidth #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4700 req/s** with **40 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["301 Mbit/s","301000 Mbit/s","1500 Mbit/s","37.6 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **4400 req/s** with **190 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["167 Mbit/s","1340000 Mbit/s","6690 Mbit/s","1340 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **2700 req/s** with **495 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["10700 Mbit/s","167 Mbit/s","1340000 Mbit/s","1340 Mbit/s"],"answer":3},{"prompt":"An endpoint serves **1500 req/s** with **250 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["375 Mbit/s","375000 Mbit/s","3000 Mbit/s","46.9 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1700 req/s** with **450 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["1220 Mbit/s","6120 Mbit/s","153 Mbit/s","1220000 Mbit/s"],"answer":0}]
---
# Design Drill: API bandwidth #53

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
