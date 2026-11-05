---
slug: "sd01-storage-19"
title: "Design Drill: Storage growth per year #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **500,000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["0.5 GB","183 GB","1.82 TB","18.3 GB"],"answer":1,"explanation":"500,000 × 1 KB × 365 ≈ 183 GB."},{"prompt":"Users create **20,000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["36.5 TB","365 GB","10 GB","3.65 TB"],"answer":3,"explanation":"20,000 × 500 KB × 365 ≈ 3.65 TB."},{"prompt":"Users create **500,000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["250 GB","91.3 TB","913 TB","9.13 TB"],"answer":1,"explanation":"500,000 × 500 KB × 365 ≈ 91.3 TB."},{"prompt":"Users create **200,000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["29.2 GB","292 GB","0.8 GB","2.92 TB"],"answer":1,"explanation":"200,000 × 4 KB × 365 ≈ 292 GB."},{"prompt":"Users create **2000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["0.6 GB","21.9 GB","2.19 TB","219 GB"],"answer":3,"explanation":"2000 × 300 KB × 365 ≈ 219 GB."}]
---
# Design Drill: Storage growth per year #19

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
