---
slug: "sd01-storage-17"
title: "Design Drill: Storage growth per year #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **100,000 items a day**, each about **5 KB**. Roughly how much storage do they need per year?","options":["1.82 TB","183 GB","18.3 GB","0.5 GB"],"answer":1,"explanation":"100,000 × 5 KB × 365 ≈ 183 GB."},{"prompt":"Users create **20,000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["146 GB","14.6 GB","1.46 GB","0.04 GB"],"answer":1,"explanation":"20,000 × 2 KB × 365 ≈ 14.6 GB."},{"prompt":"Users create **20,000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["0.08 GB","292 GB","29.2 GB","2.92 GB"],"answer":2,"explanation":"20,000 × 4 KB × 365 ≈ 29.2 GB."},{"prompt":"Users create **100,000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["36.5 GB","0.1 GB","365 GB","3.65 GB"],"answer":0,"explanation":"100,000 × 1 KB × 365 ≈ 36.5 GB."},{"prompt":"Users create **200,000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["14.6 TB","40 GB","1.46 TB","146 TB"],"answer":0,"explanation":"200,000 × 200 KB × 365 ≈ 14.6 TB."}]
---
# Design Drill: Storage growth per year #17

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
