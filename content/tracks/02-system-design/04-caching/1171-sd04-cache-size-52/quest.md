---
slug: "sd04-cache-size-52"
title: "Design Drill: Sizing a cache #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7.8 million** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["48 GB","4.8 GB","32 GB","0.48 GB"],"answer":1},{"prompt":"You have **1.9 million** items, and the hottest **5%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["4 GB","2 GB","0.02 GB","0.2 GB"],"answer":3},{"prompt":"You have **3.9 million** items, and the hottest **25%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["24 GB","5.9 GB","0.59 GB","59 GB"],"answer":1},{"prompt":"You have **5.6 million** items, and the hottest **20%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["80 GB","40 GB","8 GB","0.8 GB"],"answer":2},{"prompt":"You have **2.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.2 GB","0.082 GB","0.82 GB","16 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #52

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
