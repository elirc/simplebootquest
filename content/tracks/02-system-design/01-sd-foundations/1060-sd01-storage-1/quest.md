---
slug: "sd01-storage-1"
title: "Design Drill: Storage growth per year #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **5000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["5.47 TB","54.8 GB","1.5 GB","548 GB"],"answer":3,"explanation":"5000 × 300 KB × 365 ≈ 548 GB."},{"prompt":"Users create **5000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["0.01 GB","0.365 GB","36.5 GB","3.65 GB"],"answer":3,"explanation":"5000 × 2 KB × 365 ≈ 3.65 GB."},{"prompt":"Users create **500,000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["1 GB","36.5 GB","3.65 TB","365 GB"],"answer":3,"explanation":"500,000 × 2 KB × 365 ≈ 365 GB."},{"prompt":"Users create **50,000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["36.5 TB","3.65 TB","365 GB","10 GB"],"answer":1,"explanation":"50,000 × 200 KB × 365 ≈ 3.65 TB."},{"prompt":"Users create **2000 items a day**, each about **8 KB**. Roughly how much storage do they need per year?","options":["0.584 GB","5.84 GB","0.016 GB","58.4 GB"],"answer":1,"explanation":"2000 × 8 KB × 365 ≈ 5.84 GB."}]
---
# Design Drill: Storage growth per year #1

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
