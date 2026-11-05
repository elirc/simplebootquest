---
slug: "sd04-cache-size-7"
title: "Design Drill: Sizing a cache #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **4.7 million** items, and the hottest **20%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["76 GB","38 GB","0.76 GB","7.6 GB"],"answer":3},{"prompt":"You have **1.8 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.6 GB","0.16 GB","16 GB","11 GB"],"answer":0},{"prompt":"You have **4.5 million** items, and the hottest **25%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["32 GB","0.8 GB","8 GB","80 GB"],"answer":2},{"prompt":"You have **1.9 million** items, and the hottest **25%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.8 GB","15 GB","0.38 GB","38 GB"],"answer":0},{"prompt":"You have **400,000** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.1 GB","2 GB","0.31 GB","0.031 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #7

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
