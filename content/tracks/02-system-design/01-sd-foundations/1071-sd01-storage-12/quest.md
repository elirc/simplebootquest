---
slug: "sd01-storage-12"
title: "Design Drill: Storage growth per year #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **50,000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["0.1 GB","3.65 GB","365 GB","36.5 GB"],"answer":3,"explanation":"50,000 × 2 KB × 365 ≈ 36.5 GB."},{"prompt":"Users create **10,000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["110 GB","10.9 TB","3 GB","1.09 TB"],"answer":3,"explanation":"10,000 × 300 KB × 365 ≈ 1.09 TB."},{"prompt":"Users create **200,000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["36.5 TB","365 TB","3.65 TB","100 GB"],"answer":0,"explanation":"200,000 × 500 KB × 365 ≈ 36.5 TB."},{"prompt":"Users create **2000 items a day**, each about **5 KB**. Roughly how much storage do they need per year?","options":["0.01 GB","3.65 GB","36.5 GB","0.365 GB"],"answer":1,"explanation":"2000 × 5 KB × 365 ≈ 3.65 GB."},{"prompt":"Users create **500,000 items a day**, each about **5 KB**. Roughly how much storage do they need per year?","options":["913 GB","91.3 GB","2.5 GB","9.13 TB"],"answer":0,"explanation":"500,000 × 5 KB × 365 ≈ 913 GB."}]
---
# Design Drill: Storage growth per year #12

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
