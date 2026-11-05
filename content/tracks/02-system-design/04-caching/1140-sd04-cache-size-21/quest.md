---
slug: "sd04-cache-size-21"
title: "Design Drill: Sizing a cache #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **4.2 million** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["22 GB","8.8 GB","2.2 GB","0.22 GB"],"answer":2},{"prompt":"You have **2.1 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.3 GB","0.023 GB","0.23 GB","0.0021 GB"],"answer":2},{"prompt":"You have **2.1 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["13 GB","0.19 GB","1.9 GB","19 GB"],"answer":2},{"prompt":"You have **6.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.3 GB","26 GB","0.13 GB","13 GB"],"answer":0},{"prompt":"You have **1.5 million** items, and the hottest **20%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.1 GB","21 GB","0.21 GB","11 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #21

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
