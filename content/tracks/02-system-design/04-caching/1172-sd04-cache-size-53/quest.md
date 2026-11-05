---
slug: "sd04-cache-size-53"
title: "Design Drill: Sizing a cache #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7.1 million** items, and the hottest **20%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["4.4 GB","22 GB","0.44 GB","44 GB"],"answer":0},{"prompt":"You have **1.6 million** items, and the hottest **25%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["28 GB","2.8 GB","0.28 GB","11 GB"],"answer":1},{"prompt":"You have **1.1 million** items, and the hottest **25%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.17 GB","17 GB","1.7 GB","6.7 GB"],"answer":2},{"prompt":"You have **8 million** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.5 GB","0.85 GB","57 GB","85 GB"],"answer":0},{"prompt":"You have **8 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.73 GB","73 GB","7.3 GB","49 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #53

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
