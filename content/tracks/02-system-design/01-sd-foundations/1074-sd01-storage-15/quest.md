---
slug: "sd01-storage-15"
title: "Design Drill: Storage growth per year #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **100,000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["1.46 TB","14.6 GB","146 GB","0.4 GB"],"answer":2,"explanation":"100,000 × 4 KB × 365 ≈ 146 GB."},{"prompt":"Users create **50,000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["730 GB","73 GB","7.3 GB","0.2 GB"],"answer":1,"explanation":"50,000 × 4 KB × 365 ≈ 73 GB."},{"prompt":"Users create **1000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["0.001 GB","0.365 GB","3.65 GB","0.0365 GB"],"answer":1,"explanation":"1000 × 1 KB × 365 ≈ 0.365 GB."},{"prompt":"Users create **5000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["2.5 GB","913 GB","91.3 GB","9.13 TB"],"answer":1,"explanation":"5000 × 500 KB × 365 ≈ 913 GB."},{"prompt":"Users create **100,000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["30 GB","110 TB","1.09 TB","10.9 TB"],"answer":3,"explanation":"100,000 × 300 KB × 365 ≈ 10.9 TB."}]
---
# Design Drill: Storage growth per year #15

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
