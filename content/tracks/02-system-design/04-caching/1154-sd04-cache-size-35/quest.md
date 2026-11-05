---
slug: "sd04-cache-size-35"
title: "Design Drill: Sizing a cache #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **600,000** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["4.3 GB","0.064 GB","0.64 GB","6.4 GB"],"answer":2},{"prompt":"You have **600,000** items, and the hottest **15%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.099 GB","0.99 GB","0.0099 GB","0.66 GB"],"answer":0},{"prompt":"You have **1.3 million** items, and the hottest **20%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.1 GB","0.11 GB","5.3 GB","11 GB"],"answer":0},{"prompt":"You have **6.1 million** items, and the hottest **20%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.99 GB","49 GB","9.9 GB","99 GB"],"answer":2},{"prompt":"You have **2.8 million** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.5 GB","0.15 GB","15 GB","5.9 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #35

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
