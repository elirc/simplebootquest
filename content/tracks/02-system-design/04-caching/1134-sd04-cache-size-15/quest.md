---
slug: "sd04-cache-size-15"
title: "Design Drill: Sizing a cache #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.7 million** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7.1 GB","0.71 GB","71 GB","48 GB"],"answer":0},{"prompt":"You have **4.2 million** items, and the hottest **25%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.75 GB","30 GB","7.5 GB","75 GB"],"answer":2},{"prompt":"You have **900,000** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.9 GB","4.7 GB","0.047 GB","0.47 GB"],"answer":3},{"prompt":"You have **7.9 million** items, and the hottest **15%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["9.6 GB","64 GB","0.96 GB","96 GB"],"answer":0},{"prompt":"You have **6.9 million** items, and the hottest **5%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.72 GB","0.072 GB","7.2 GB","14 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #15

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
