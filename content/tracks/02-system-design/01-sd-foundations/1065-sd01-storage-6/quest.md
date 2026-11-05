---
slug: "sd01-storage-6"
title: "Design Drill: Storage growth per year #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **20,000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["36.5 GB","365 GB","3.65 TB","1 GB"],"answer":1,"explanation":"20,000 × 50 KB × 365 ≈ 365 GB."},{"prompt":"Users create **500,000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["91.3 TB","913 GB","25 GB","9.13 TB"],"answer":3,"explanation":"500,000 × 50 KB × 365 ≈ 9.13 TB."},{"prompt":"Users create **2000 items a day**, each about **3 KB**. Roughly how much storage do they need per year?","options":["2.19 GB","21.9 GB","0.006 GB","0.219 GB"],"answer":0,"explanation":"2000 × 3 KB × 365 ≈ 2.19 GB."},{"prompt":"Users create **5000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["91.3 GB","913 GB","0.25 GB","9.13 GB"],"answer":0,"explanation":"5000 × 50 KB × 365 ≈ 91.3 GB."},{"prompt":"Users create **5000 items a day**, each about **3 KB**. Roughly how much storage do they need per year?","options":["5.47 GB","54.8 GB","0.015 GB","0.547 GB"],"answer":0,"explanation":"5000 × 3 KB × 365 ≈ 5.47 GB."}]
---
# Design Drill: Storage growth per year #6

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
