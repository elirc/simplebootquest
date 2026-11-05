---
slug: "sd01-storage-18"
title: "Design Drill: Storage growth per year #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **50,000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["15 GB","5.47 TB","548 GB","54.8 TB"],"answer":1,"explanation":"50,000 × 300 KB × 365 ≈ 5.47 TB."},{"prompt":"Users create **500,000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["365 TB","36.5 TB","100 GB","3.65 TB"],"answer":1,"explanation":"500,000 × 200 KB × 365 ≈ 36.5 TB."},{"prompt":"Users create **2000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["36.5 GB","0.1 GB","3.65 GB","365 GB"],"answer":0,"explanation":"2000 × 50 KB × 365 ≈ 36.5 GB."},{"prompt":"Users create **10,000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["7.3 TB","2 GB","730 GB","73 GB"],"answer":2,"explanation":"10,000 × 200 KB × 365 ≈ 730 GB."},{"prompt":"Users create **500,000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["183 TB","1.82 TB","18.3 TB","50 GB"],"answer":2,"explanation":"500,000 × 100 KB × 365 ≈ 18.3 TB."}]
---
# Design Drill: Storage growth per year #18

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
