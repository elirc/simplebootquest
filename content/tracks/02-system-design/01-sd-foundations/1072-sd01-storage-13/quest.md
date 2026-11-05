---
slug: "sd01-storage-13"
title: "Design Drill: Storage growth per year #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **50,000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["913 GB","9.13 TB","91.3 GB","2.5 GB"],"answer":0,"explanation":"50,000 × 50 KB × 365 ≈ 913 GB."},{"prompt":"Users create **20,000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["146 GB","14.6 TB","1.46 TB","4 GB"],"answer":2,"explanation":"20,000 × 200 KB × 365 ≈ 1.46 TB."},{"prompt":"Users create **50,000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["183 GB","1.82 GB","0.05 GB","18.3 GB"],"answer":3,"explanation":"50,000 × 1 KB × 365 ≈ 18.3 GB."},{"prompt":"Users create **2000 items a day**, each about **200 KB**. Roughly how much storage do they need per year?","options":["14.6 GB","1.46 TB","146 GB","0.4 GB"],"answer":2,"explanation":"2000 × 200 KB × 365 ≈ 146 GB."},{"prompt":"Users create **200,000 items a day**, each about **1 KB**. Roughly how much storage do they need per year?","options":["730 GB","0.2 GB","73 GB","7.3 GB"],"answer":2,"explanation":"200,000 × 1 KB × 365 ≈ 73 GB."}]
---
# Design Drill: Storage growth per year #13

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
