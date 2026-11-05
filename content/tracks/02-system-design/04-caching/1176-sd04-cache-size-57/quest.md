---
slug: "sd04-cache-size-57"
title: "Design Drill: Sizing a cache #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **400,000** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.16 GB","1.6 GB","0.016 GB","3.2 GB"],"answer":0},{"prompt":"You have **1.6 million** items, and the hottest **25%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.2 GB","8.2 GB","2 GB","20 GB"],"answer":2},{"prompt":"You have **7.6 million** items, and the hottest **20%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["54 GB","1.1 GB","110 GB","11 GB"],"answer":3},{"prompt":"You have **2.2 million** items, and the hottest **20%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.6 GB","18 GB","36 GB","0.36 GB"],"answer":0},{"prompt":"You have **5.4 million** items, and the hottest **25%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.69 GB","6.9 GB","28 GB","69 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #57

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
