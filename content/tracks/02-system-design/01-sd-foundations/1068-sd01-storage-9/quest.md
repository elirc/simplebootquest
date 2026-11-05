---
slug: "sd01-storage-9"
title: "Design Drill: Storage growth per year #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **500,000 items a day**, each about **8 KB**. Roughly how much storage do they need per year?","options":["14.6 TB","146 GB","1.46 TB","4 GB"],"answer":2,"explanation":"500,000 × 8 KB × 365 ≈ 1.46 TB."},{"prompt":"Users create **50,000 items a day**, each about **3 KB**. Roughly how much storage do they need per year?","options":["0.15 GB","5.47 GB","548 GB","54.8 GB"],"answer":3,"explanation":"50,000 × 3 KB × 365 ≈ 54.8 GB."},{"prompt":"Users create **10,000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["18.3 GB","0.5 GB","1.82 TB","183 GB"],"answer":3,"explanation":"10,000 × 50 KB × 365 ≈ 183 GB."},{"prompt":"Users create **100,000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["7.3 GB","0.2 GB","730 GB","73 GB"],"answer":3,"explanation":"100,000 × 2 KB × 365 ≈ 73 GB."},{"prompt":"Users create **10,000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["7.3 GB","0.02 GB","0.73 GB","73 GB"],"answer":0,"explanation":"10,000 × 2 KB × 365 ≈ 7.3 GB."}]
---
# Design Drill: Storage growth per year #9

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
