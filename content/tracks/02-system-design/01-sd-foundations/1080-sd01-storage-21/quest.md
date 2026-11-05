---
slug: "sd01-storage-21"
title: "Design Drill: Storage growth per year #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **2000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["0.73 GB","73 GB","7.3 GB","0.02 GB"],"answer":2,"explanation":"2000 × 10 KB × 365 ≈ 7.3 GB."},{"prompt":"Users create **20,000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["7.3 GB","0.73 GB","73 GB","0.02 GB"],"answer":0,"explanation":"20,000 × 1 KB × 365 ≈ 7.3 GB."},{"prompt":"Users create **1000 items a day**, each about **8 KB**. Roughly how much storage do they need per year?","options":["29.2 GB","2.92 GB","0.008 GB","0.292 GB"],"answer":1,"explanation":"1000 × 8 KB × 365 ≈ 2.92 GB."},{"prompt":"Users create **1000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["0.73 GB","0.073 GB","0.002 GB","7.3 GB"],"answer":0,"explanation":"1000 × 2 KB × 365 ≈ 0.73 GB."},{"prompt":"Users create **10,000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["36.5 GB","0.365 GB","0.01 GB","3.65 GB"],"answer":3,"explanation":"10,000 × 1 KB × 365 ≈ 3.65 GB."}]
---
# Design Drill: Storage growth per year #21

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
