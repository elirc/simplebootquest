---
slug: "sd04-cache-size-51"
title: "Design Drill: Sizing a cache #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **8 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.064 GB","65 GB","6.5 GB","0.65 GB"],"answer":2},{"prompt":"You have **6 million** items, and the hottest **5%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.63 GB","13 GB","6.3 GB","0.063 GB"],"answer":0},{"prompt":"You have **5.2 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["4 GB","0.4 GB","40 GB","16 GB"],"answer":0},{"prompt":"You have **4.5 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.0045 GB","0.5 GB","0.05 GB","5 GB"],"answer":1},{"prompt":"You have **7.3 million** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["37 GB","0.56 GB","56 GB","5.6 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #51

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
