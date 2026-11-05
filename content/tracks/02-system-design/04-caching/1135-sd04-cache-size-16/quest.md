---
slug: "sd04-cache-size-16"
title: "Design Drill: Sizing a cache #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **3.3 million** items, and the hottest **10%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.23 GB","2.3 GB","0.023 GB","23 GB"],"answer":1},{"prompt":"You have **6.5 million** items, and the hottest **10%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2 GB","0.2 GB","20 GB","0.019 GB"],"answer":0},{"prompt":"You have **7.8 million** items, and the hottest **10%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.32 GB","3.2 GB","0.031 GB","32 GB"],"answer":1},{"prompt":"You have **3.6 million** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["15 GB","22 GB","0.22 GB","2.2 GB"],"answer":3},{"prompt":"You have **2 million** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.042 GB","0.42 GB","4.2 GB","0.004 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #16

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
