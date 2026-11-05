---
slug: "sd04-cache-size-28"
title: "Design Drill: Sizing a cache #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5.7 million** items, and the hottest **5%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.031 GB","3.1 GB","6.3 GB","0.31 GB"],"answer":3},{"prompt":"You have **5.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["33 GB","16 GB","1.6 GB","0.16 GB"],"answer":2},{"prompt":"You have **4.8 million** items, and the hottest **5%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["9.8 GB","0.98 GB","0.098 GB","20 GB"],"answer":1},{"prompt":"You have **7.5 million** items, and the hottest **15%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["16 GB","24 GB","0.24 GB","2.4 GB"],"answer":3},{"prompt":"You have **2.3 million** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.23 GB","2.3 GB","23 GB","12 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #28

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
