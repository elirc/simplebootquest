---
slug: "sd01-storage-8"
title: "Design Drill: Storage growth per year #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **1000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["0.365 GB","3.65 GB","36.5 GB","0.01 GB"],"answer":1,"explanation":"1000 × 10 KB × 365 ≈ 3.65 GB."},{"prompt":"Users create **1000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["0.146 GB","0.004 GB","1.46 GB","14.6 GB"],"answer":2,"explanation":"1000 × 4 KB × 365 ≈ 1.46 GB."},{"prompt":"Users create **500,000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["548 TB","150 GB","54.8 TB","5.47 TB"],"answer":2,"explanation":"500,000 × 300 KB × 365 ≈ 54.8 TB."},{"prompt":"Users create **5000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["1.82 TB","0.5 GB","18.3 GB","183 GB"],"answer":3,"explanation":"5000 × 100 KB × 365 ≈ 183 GB."},{"prompt":"Users create **5000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["3.65 TB","365 GB","36.5 GB","1 GB"],"answer":1,"explanation":"5000 × 200 KB × 365 ≈ 365 GB."}]
---
# Design Drill: Storage growth per year #8

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
