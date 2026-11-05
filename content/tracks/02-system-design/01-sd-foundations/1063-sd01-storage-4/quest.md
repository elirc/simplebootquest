---
slug: "sd01-storage-4"
title: "Design Drill: Storage growth per year #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **20,000 items a day**, each about **5 KB**. Roughly how much storage do they need per year?","options":["36.5 GB","365 GB","3.65 GB","0.1 GB"],"answer":0,"explanation":"20,000 × 5 KB × 365 ≈ 36.5 GB."},{"prompt":"Users create **1000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["0.1 GB","365 GB","3.65 GB","36.5 GB"],"answer":3,"explanation":"1000 × 100 KB × 365 ≈ 36.5 GB."},{"prompt":"Users create **100,000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["1.82 TB","5 GB","18.3 TB","183 GB"],"answer":0,"explanation":"100,000 × 50 KB × 365 ≈ 1.82 TB."},{"prompt":"Users create **50,000 items a day**, each about **5 KB**. Roughly how much storage do they need per year?","options":["913 GB","0.25 GB","91.3 GB","9.13 GB"],"answer":2,"explanation":"50,000 × 5 KB × 365 ≈ 91.3 GB."},{"prompt":"Users create **2000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["3.65 TB","1 GB","36.5 GB","365 GB"],"answer":3,"explanation":"2000 × 500 KB × 365 ≈ 365 GB."}]
---
# Design Drill: Storage growth per year #4

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
