---
slug: "sd01-storage-20"
title: "Design Drill: Storage growth per year #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **50,000 items a day**, each about **8 KB**. Roughly how much storage do they need per year?","options":["146 GB","0.4 GB","14.6 GB","1.46 TB"],"answer":0,"explanation":"50,000 × 8 KB × 365 ≈ 146 GB."},{"prompt":"Users create **10,000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["365 GB","3.65 TB","36.5 GB","1 GB"],"answer":0,"explanation":"10,000 × 100 KB × 365 ≈ 365 GB."},{"prompt":"Users create **2000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["0.073 GB","7.3 GB","0.73 GB","0.002 GB"],"answer":2,"explanation":"2000 × 1 KB × 365 ≈ 0.73 GB."},{"prompt":"Users create **200,000 items a day**, each about **8 KB**. Roughly how much storage do they need per year?","options":["584 GB","1.6 GB","5.84 TB","58.4 GB"],"answer":0,"explanation":"200,000 × 8 KB × 365 ≈ 584 GB."},{"prompt":"Users create **500,000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["7.3 TB","2 GB","730 GB","73 GB"],"answer":2,"explanation":"500,000 × 4 KB × 365 ≈ 730 GB."}]
---
# Design Drill: Storage growth per year #20

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
