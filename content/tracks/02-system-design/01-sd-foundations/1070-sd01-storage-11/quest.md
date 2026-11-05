---
slug: "sd01-storage-11"
title: "Design Drill: Storage growth per year #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **100,000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["3.65 TB","365 GB","10 GB","36.5 TB"],"answer":0,"explanation":"100,000 × 100 KB × 365 ≈ 3.65 TB."},{"prompt":"Users create **200,000 items a day**, each about **2 KB**. Roughly how much storage do they need per year?","options":["0.4 GB","14.6 GB","1.46 TB","146 GB"],"answer":3,"explanation":"200,000 × 2 KB × 365 ≈ 146 GB."},{"prompt":"Users create **200,000 items a day**, each about **300 KB**. Roughly how much storage do they need per year?","options":["219 TB","21.9 TB","2.19 TB","60 GB"],"answer":1,"explanation":"200,000 × 300 KB × 365 ≈ 21.9 TB."},{"prompt":"Users create **20,000 items a day**, each about **100 KB**. Roughly how much storage do they need per year?","options":["2 GB","730 GB","7.3 TB","73 GB"],"answer":1,"explanation":"20,000 × 100 KB × 365 ≈ 730 GB."},{"prompt":"Users create **100,000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["36.5 GB","1 GB","365 GB","3.65 TB"],"answer":2,"explanation":"100,000 × 10 KB × 365 ≈ 365 GB."}]
---
# Design Drill: Storage growth per year #11

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
