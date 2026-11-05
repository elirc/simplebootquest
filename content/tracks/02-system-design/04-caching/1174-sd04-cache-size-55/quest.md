---
slug: "sd04-cache-size-55"
title: "Design Drill: Sizing a cache #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **2.5 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.8 GB","0.028 GB","0.28 GB","0.0025 GB"],"answer":2},{"prompt":"You have **7.6 million** items, and the hottest **20%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.47 GB","4.7 GB","24 GB","47 GB"],"answer":1},{"prompt":"You have **2.1 million** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.16 GB","11 GB","1.6 GB","16 GB"],"answer":2},{"prompt":"You have **5.3 million** items, and the hottest **15%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.4 GB","64 GB","43 GB","0.64 GB"],"answer":0},{"prompt":"You have **4.2 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.1 GB","21 GB","0.021 GB","0.21 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #55

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
