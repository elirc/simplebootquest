---
slug: "sd04-cache-size-46"
title: "Design Drill: Sizing a cache #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5.5 million** items, and the hottest **20%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7.8 GB","39 GB","0.78 GB","78 GB"],"answer":0},{"prompt":"You have **200,000** items, and the hottest **25%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2 GB","0.2 GB","0.82 GB","0.02 GB"],"answer":1},{"prompt":"You have **3.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["5.3 GB","0.053 GB","11 GB","0.53 GB"],"answer":3},{"prompt":"You have **5.3 million** items, and the hottest **15%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.87 GB","5.8 GB","8.7 GB","0.087 GB"],"answer":0},{"prompt":"You have **8 million** items, and the hottest **10%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.5 GB","0.024 GB","0.25 GB","25 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #46

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
