---
slug: "sd04-cache-size-12"
title: "Design Drill: Sizing a cache #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **900,000** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.092 GB","0.92 GB","4.6 GB","9.2 GB"],"answer":1},{"prompt":"You have **1.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.46 GB","4.6 GB","0.046 GB","9.2 GB"],"answer":0},{"prompt":"You have **6.1 million** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["37 GB","19 GB","0.19 GB","1.9 GB"],"answer":3},{"prompt":"You have **900,000** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["9.6 GB","0.96 GB","6.4 GB","0.096 GB"],"answer":1},{"prompt":"You have **5 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.39 GB","16 GB","39 GB","3.9 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #12

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
