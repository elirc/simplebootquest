---
slug: "sd04-cache-size-43"
title: "Design Drill: Sizing a cache #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **500,000** items, and the hottest **20%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.1 GB","0.021 GB","1 GB","0.21 GB"],"answer":3},{"prompt":"You have **5.9 million** items, and the hottest **15%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["18 GB","2.7 GB","0.27 GB","27 GB"],"answer":1},{"prompt":"You have **6.3 million** items, and the hottest **25%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.9 GB","17 GB","1.7 GB","0.17 GB"],"answer":2},{"prompt":"You have **5.9 million** items, and the hottest **20%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["48 GB","0.96 GB","9.6 GB","96 GB"],"answer":2},{"prompt":"You have **4 million** items, and the hottest **5%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.2 GB","0.22 GB","0.022 GB","4.4 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #43

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
