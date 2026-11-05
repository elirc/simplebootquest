---
slug: "sd04-cache-size-41"
title: "Design Drill: Sizing a cache #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **1.9 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.5 GB","5.9 GB","15 GB","0.15 GB"],"answer":0},{"prompt":"You have **200,000** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1 GB","0.2 GB","2 GB","0.02 GB"],"answer":1},{"prompt":"You have **6.8 million** items, and the hottest **5%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.1 GB","11 GB","21 GB","0.11 GB"],"answer":0},{"prompt":"You have **100,000** items, and the hottest **25%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2 GB","0.2 GB","0.81 GB","0.02 GB"],"answer":1},{"prompt":"You have **3.7 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.3 GB","3 GB","0.03 GB","30 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #41

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
