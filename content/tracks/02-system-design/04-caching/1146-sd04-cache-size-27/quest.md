---
slug: "sd04-cache-size-27"
title: "Design Drill: Sizing a cache #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.2 million** items, and the hottest **15%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.9 GB","0.29 GB","19 GB","29 GB"],"answer":0},{"prompt":"You have **3.8 million** items, and the hottest **20%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.4 GB","24 GB","0.24 GB","12 GB"],"answer":0},{"prompt":"You have **7.2 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["22 GB","0.56 GB","56 GB","5.6 GB"],"answer":3},{"prompt":"You have **400,000** items, and the hottest **25%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.071 GB","2.8 GB","0.71 GB","7.1 GB"],"answer":2},{"prompt":"You have **4.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["18 GB","0.9 GB","0.09 GB","9 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #27

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
