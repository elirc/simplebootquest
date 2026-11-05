---
slug: "sd01-storage-16"
title: "Design Drill: Storage growth per year #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **2000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["7.3 GB","730 GB","0.2 GB","73 GB"],"answer":3,"explanation":"2000 × 100 KB × 365 ≈ 73 GB."},{"prompt":"Users create **10,000 items a day**, each about **8 KB**. Roughly how much storage do they need per year?","options":["2.92 GB","0.08 GB","292 GB","29.2 GB"],"answer":3,"explanation":"10,000 × 8 KB × 365 ≈ 29.2 GB."},{"prompt":"Users create **5000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["1.82 GB","0.05 GB","18.3 GB","183 GB"],"answer":2,"explanation":"5000 × 10 KB × 365 ≈ 18.3 GB."},{"prompt":"Users create **100,000 items a day**, each about **3 KB**. Roughly how much storage do they need per year?","options":["0.3 GB","1.09 TB","10.9 GB","110 GB"],"answer":3,"explanation":"100,000 × 3 KB × 365 ≈ 110 GB."},{"prompt":"Users create **2000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["14.6 GB","1.46 GB","0.146 GB","0.004 GB"],"answer":1,"explanation":"2000 × 2 KB × 365 ≈ 1.46 GB."}]
---
# Design Drill: Storage growth per year #16

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
