---
slug: "sd01-storage-10"
title: "Design Drill: Storage growth per year #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **1000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["183 GB","0.5 GB","1.82 TB","18.3 GB"],"answer":0,"explanation":"1000 × 500 KB × 365 ≈ 183 GB."},{"prompt":"Users create **1000 items a day**, each about **5 KB**. Roughly how much storage do they need per year?","options":["0.182 GB","0.005 GB","18.3 GB","1.82 GB"],"answer":3,"explanation":"1000 × 5 KB × 365 ≈ 1.82 GB."},{"prompt":"Users create **10,000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["36.5 GB","365 GB","0.1 GB","3.65 GB"],"answer":0,"explanation":"10,000 × 10 KB × 365 ≈ 36.5 GB."},{"prompt":"Users create **2000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["0.292 GB","2.92 GB","0.008 GB","29.2 GB"],"answer":1,"explanation":"2000 × 4 KB × 365 ≈ 2.92 GB."},{"prompt":"Users create **1000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["10.9 GB","110 GB","1.09 TB","0.3 GB"],"answer":1,"explanation":"1000 × 300 KB × 365 ≈ 110 GB."}]
---
# Design Drill: Storage growth per year #10

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
