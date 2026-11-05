---
slug: "sd07-bandwidth-43"
title: "Design Drill: API bandwidth #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"An endpoint serves **4500 req/s** with **70 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["2520 Mbit/s","315000 Mbit/s","315 Mbit/s","39.4 Mbit/s"],"answer":2},{"prompt":"An endpoint serves **4900 req/s** with **290 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["178 Mbit/s","1420 Mbit/s","11400 Mbit/s","1420000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **4100 req/s** with **230 KB** JSON responses, compressed 8×. Roughly how much outbound bandwidth is that?","options":["943 Mbit/s","7540 Mbit/s","118 Mbit/s","943000 Mbit/s"],"answer":0},{"prompt":"An endpoint serves **1400 req/s** with **365 KB** JSON responses (uncompressed). Roughly how much outbound bandwidth is that?","options":["511 Mbit/s","4090 Mbit/s","4090000 Mbit/s"],"answer":1},{"prompt":"An endpoint serves **2600 req/s** with **485 KB** JSON responses, compressed 5×. Roughly how much outbound bandwidth is that?","options":["2020000 Mbit/s","2020 Mbit/s","252 Mbit/s","10100 Mbit/s"],"answer":1}]
---
# Design Drill: API bandwidth #43

Bandwidth = requests/s × response size. Trim fields, paginate and compress: JSON often shrinks 5–10× with gzip.
