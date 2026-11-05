---
slug: "sd04-cache-size-26"
title: "Design Drill: Sizing a cache #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.4 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["59 GB","5.9 GB","0.59 GB","39 GB"],"answer":1},{"prompt":"You have **900,000** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.99 GB","0.0009 GB","0.0099 GB","0.099 GB"],"answer":3},{"prompt":"You have **3.7 million** items, and the hottest **15%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7.8 GB","1.2 GB","0.12 GB","12 GB"],"answer":1},{"prompt":"You have **6.4 million** items, and the hottest **25%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.98 GB","9.8 GB","98 GB","39 GB"],"answer":1},{"prompt":"You have **1 million** items, and the hottest **10%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.61 GB","6.1 GB","0.061 GB","0.006 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #26

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
