---
slug: "sd01-storage-2"
title: "Design Drill: Storage growth per year #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **10,000 items a day**, each about **3 KB**. Roughly how much storage do they need per year?","options":["110 GB","1.09 GB","10.9 GB","0.03 GB"],"answer":2,"explanation":"10,000 × 3 KB × 365 ≈ 10.9 GB."},{"prompt":"Users create **200,000 items a day**, each about **50 KB**. Roughly how much storage do they need per year?","options":["3.65 TB","365 GB","36.5 TB","10 GB"],"answer":0,"explanation":"200,000 × 50 KB × 365 ≈ 3.65 TB."},{"prompt":"Users create **10,000 items a day**, each about **4 KB**. Roughly how much storage do they need per year?","options":["146 GB","1.46 GB","14.6 GB","0.04 GB"],"answer":2,"explanation":"10,000 × 4 KB × 365 ≈ 14.6 GB."},{"prompt":"Users create **5000 items a day**, each about **5 KB**. Roughly how much storage do they need per year?","options":["0.025 GB","91.3 GB","0.912 GB","9.13 GB"],"answer":3,"explanation":"5000 × 5 KB × 365 ≈ 9.13 GB."},{"prompt":"Users create **200,000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["730 GB","2 GB","73 GB","7.3 TB"],"answer":0,"explanation":"200,000 × 10 KB × 365 ≈ 730 GB."}]
---
# Design Drill: Storage growth per year #2

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
