---
slug: "sd01-storage-7"
title: "Design Drill: Storage growth per year #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **1000 items a day**, each about **3 KB**. Roughly how much storage do they need per year?","options":["0.003 GB","10.9 GB","1.09 GB","0.11 GB"],"answer":2,"explanation":"1000 × 3 KB × 365 ≈ 1.09 GB."},{"prompt":"Users create **1000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["0.2 GB","730 GB","7.3 GB","73 GB"],"answer":3,"explanation":"1000 × 200 KB × 365 ≈ 73 GB."},{"prompt":"Users create **20,000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["730 GB","0.2 GB","73 GB","7.3 GB"],"answer":2,"explanation":"20,000 × 10 KB × 365 ≈ 73 GB."},{"prompt":"Users create **50,000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["18.3 TB","5 GB","183 GB","1.82 TB"],"answer":3,"explanation":"50,000 × 100 KB × 365 ≈ 1.82 TB."},{"prompt":"Users create **1000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["0.05 GB","1.82 GB","183 GB","18.3 GB"],"answer":3,"explanation":"1000 × 50 KB × 365 ≈ 18.3 GB."}]
---
# Design Drill: Storage growth per year #7

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
