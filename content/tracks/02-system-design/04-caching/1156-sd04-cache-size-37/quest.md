---
slug: "sd04-cache-size-37"
title: "Design Drill: Sizing a cache #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **2 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.6 GB","0.15 GB","6.2 GB","16 GB"],"answer":0},{"prompt":"You have **4.1 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.1 GB","0.21 GB","0.021 GB","21 GB"],"answer":0},{"prompt":"You have **6.9 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["5.6 GB","0.56 GB","56 GB","0.055 GB"],"answer":0},{"prompt":"You have **1.3 million** items, and the hottest **20%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["5.5 GB","0.55 GB","0.055 GB","2.7 GB"],"answer":1},{"prompt":"You have **3 million** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.1 GB","15 GB","31 GB","0.31 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #37

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
