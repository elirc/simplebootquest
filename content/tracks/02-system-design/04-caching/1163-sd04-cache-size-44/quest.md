---
slug: "sd04-cache-size-44"
title: "Design Drill: Sizing a cache #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.4 million** items, and the hottest **15%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7 GB","1.1 GB","0.11 GB","11 GB"],"answer":1},{"prompt":"You have **3 million** items, and the hottest **10%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.2 GB","0.12 GB","12 GB","0.012 GB"],"answer":0},{"prompt":"You have **4.3 million** items, and the hottest **20%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.18 GB","1.8 GB","9 GB","18 GB"],"answer":1},{"prompt":"You have **2.2 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["17 GB","0.17 GB","1.7 GB","6.8 GB"],"answer":2},{"prompt":"You have **5 million** items, and the hottest **20%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.31 GB","16 GB","3.1 GB","31 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #44

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
