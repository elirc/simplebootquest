---
slug: "sd04-cache-size-33"
title: "Design Drill: Sizing a cache #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.8 million** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.9 GB","35 GB","0.69 GB","69 GB"],"answer":0},{"prompt":"You have **4.7 million** items, and the hottest **15%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["15 GB","0.22 GB","2.2 GB","22 GB"],"answer":2},{"prompt":"You have **6.4 million** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["39 GB","0.39 GB","26 GB","3.9 GB"],"answer":3},{"prompt":"You have **1.3 million** items, and the hottest **20%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.029 GB","1.4 GB","0.29 GB","2.9 GB"],"answer":2},{"prompt":"You have **400,000** items, and the hottest **25%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.061 GB","2.4 GB","0.61 GB","6.1 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #33

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
