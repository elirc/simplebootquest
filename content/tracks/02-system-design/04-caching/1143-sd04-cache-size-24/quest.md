---
slug: "sd04-cache-size-24"
title: "Design Drill: Sizing a cache #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **2.4 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7.4 GB","0.19 GB","1.9 GB","19 GB"],"answer":2},{"prompt":"You have **700,000** items, and the hottest **25%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7.2 GB","0.72 GB","2.9 GB","0.072 GB"],"answer":1},{"prompt":"You have **7.1 million** items, and the hottest **20%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["29 GB","0.58 GB","5.8 GB","58 GB"],"answer":2},{"prompt":"You have **5.6 million** items, and the hottest **20%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.24 GB","2.4 GB","24 GB","12 GB"],"answer":1},{"prompt":"You have **2.7 million** items, and the hottest **20%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["11 GB","2.2 GB","0.22 GB","22 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #24

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
