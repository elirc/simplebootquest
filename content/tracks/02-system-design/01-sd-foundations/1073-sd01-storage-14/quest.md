---
slug: "sd01-storage-14"
title: "Design Drill: Storage growth per year #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Users create **200,000 items a day**, each about **5 KB**. Roughly how much storage do they need per year?","options":["36.5 GB","1 GB","3.65 TB","365 GB"],"answer":3,"explanation":"200,000 × 5 KB × 365 ≈ 365 GB."},{"prompt":"Users create **100,000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["183 TB","50 GB","1.82 TB","18.3 TB"],"answer":3,"explanation":"100,000 × 500 KB × 365 ≈ 18.3 TB."},{"prompt":"Users create **10,000 items a day**, each about **500 KB**. Roughly how much storage do they need per year?","options":["183 GB","1.82 TB","18.3 TB","5 GB"],"answer":1,"explanation":"10,000 × 500 KB × 365 ≈ 1.82 TB."},{"prompt":"Users create **5000 items a day**, each about **8 KB**. Roughly how much storage do they need per year?","options":["1.46 GB","146 GB","14.6 GB","0.04 GB"],"answer":2,"explanation":"5000 × 8 KB × 365 ≈ 14.6 GB."},{"prompt":"Users create **50,000 items a day**, each about **10 KB**. Roughly how much storage do they need per year?","options":["1.82 TB","18.3 GB","0.5 GB","183 GB"],"answer":3,"explanation":"50,000 × 10 KB × 365 ≈ 183 GB."}]
---
# Design Drill: Storage growth per year #14

Storage per year = items per day × size per item × 365. Keep **database rows** (KB) and **files** (MB) separate: they live in different systems at very different prices.
