---
slug: "sd01-storage-3"
title: "Design Drill: Storage growth per year #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **5000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["1.82 GB","18.3 GB","0.182 GB","0.005 GB"],"answer":0,"explanation":"5000 × 1 KB × 365 ≈ 1.82 GB."},{"prompt":"Users create **20,000 items a day**, each about **3 KB**. Roughly how much storage do they need per year?","options":["21.9 GB","2.19 GB","0.06 GB","219 GB"],"answer":0,"explanation":"20,000 × 3 KB × 365 ≈ 21.9 GB."},{"prompt":"Users create **100,000 items a day**, each about **8 KB**. Roughly how much storage do they need per year?","options":["292 GB","0.8 GB","2.92 TB","29.2 GB"],"answer":0,"explanation":"100,000 × 8 KB × 365 ≈ 292 GB."},{"prompt":"Users create **500,000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["5 GB","18.3 TB","1.82 TB","183 GB"],"answer":2,"explanation":"500,000 × 10 KB × 365 ≈ 1.82 TB."},{"prompt":"Users create **100,000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["7.3 TB","20 GB","730 GB","73 TB"],"answer":0,"explanation":"100,000 × 200 KB × 365 ≈ 7.3 TB."}]
---
# Design Drill: Storage growth per year #3

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
