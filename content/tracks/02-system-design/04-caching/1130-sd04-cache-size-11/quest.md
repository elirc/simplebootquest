---
slug: "sd04-cache-size-11"
title: "Design Drill: Sizing a cache #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.7 million** items, and the hottest **20%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["11 GB","110 GB","1.1 GB","54 GB"],"answer":0},{"prompt":"You have **3 million** items, and the hottest **20%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.13 GB","6.3 GB","13 GB","1.3 GB"],"answer":3},{"prompt":"You have **6.6 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["5.1 GB","20 GB","51 GB","0.51 GB"],"answer":0},{"prompt":"You have **2.1 million** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["13 GB","0.64 GB","0.064 GB","6.4 GB"],"answer":1},{"prompt":"You have **6.8 million** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.4 GB","14 GB","0.014 GB","0.14 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #11

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
