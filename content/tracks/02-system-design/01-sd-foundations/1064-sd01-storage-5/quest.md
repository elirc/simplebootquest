---
slug: "sd01-storage-5"
title: "Design Drill: Storage growth per year #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **20,000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["219 GB","21.9 TB","2.19 TB","6 GB"],"answer":2,"explanation":"20,000 × 300 KB × 365 ≈ 2.19 TB."},{"prompt":"Users create **50,000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["25 GB","91.3 TB","913 GB","9.13 TB"],"answer":3,"explanation":"50,000 × 500 KB × 365 ≈ 9.13 TB."},{"prompt":"Users create **200,000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["73 TB","20 GB","7.3 TB","730 GB"],"answer":2,"explanation":"200,000 × 100 KB × 365 ≈ 7.3 TB."},{"prompt":"Users create **5000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["73 GB","0.02 GB","0.73 GB","7.3 GB"],"answer":3,"explanation":"5000 × 4 KB × 365 ≈ 7.3 GB."},{"prompt":"Users create **500,000 items a day**, each about **3 KB**. Roughly how much storage do they need per year?","options":["548 GB","54.8 GB","1.5 GB","5.47 TB"],"answer":0,"explanation":"500,000 × 3 KB × 365 ≈ 548 GB."}]
---
# Design Drill: Storage growth per year #5

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
