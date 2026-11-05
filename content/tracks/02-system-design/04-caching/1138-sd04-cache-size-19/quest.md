---
slug: "sd04-cache-size-19"
title: "Design Drill: Sizing a cache #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **3.7 million** items, and the hottest **10%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["26 GB","2.6 GB","0.026 GB","0.26 GB"],"answer":1},{"prompt":"You have **2.9 million** items, and the hottest **20%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.64 GB","6.4 GB","0.064 GB","3.2 GB"],"answer":0},{"prompt":"You have **3.9 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.32 GB","32 GB","0.031 GB","3.2 GB"],"answer":3},{"prompt":"You have **6.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.26 GB","26 GB","2.6 GB","52 GB"],"answer":2},{"prompt":"You have **800,000** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.7 GB","0.0016 GB","0.17 GB","0.017 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #19

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
