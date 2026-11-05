---
slug: "sd04-cache-size-49"
title: "Design Drill: Sizing a cache #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.6 million** items, and the hottest **10%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2 GB","20 GB","0.2 GB","0.02 GB"],"answer":0},{"prompt":"You have **7.5 million** items, and the hottest **5%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["31 GB","1.5 GB","0.15 GB","15 GB"],"answer":1},{"prompt":"You have **4.3 million** items, and the hottest **20%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["61 GB","0.61 GB","31 GB","6.1 GB"],"answer":3},{"prompt":"You have **4.4 million** items, and the hottest **20%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["18 GB","0.36 GB","3.6 GB","36 GB"],"answer":2},{"prompt":"You have **7.6 million** items, and the hottest **15%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["16 GB","24 GB","2.4 GB","0.24 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #49

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
