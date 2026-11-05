---
slug: "sd04-cache-size-25"
title: "Design Drill: Sizing a cache #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.1 million** items, and the hottest **5%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.64 GB","0.064 GB","6.4 GB","13 GB"],"answer":0},{"prompt":"You have **7.3 million** items, and the hottest **20%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["89 GB","45 GB","0.89 GB","8.9 GB"],"answer":3},{"prompt":"You have **200,000** items, and the hottest **20%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.44 GB","0.22 GB","0.0044 GB","0.044 GB"],"answer":3},{"prompt":"You have **7.7 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.31 GB","62 GB","3.1 GB","31 GB"],"answer":2},{"prompt":"You have **300,000** items, and the hottest **10%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.8 GB","0.018 GB","0.18 GB","0.0018 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #25

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
