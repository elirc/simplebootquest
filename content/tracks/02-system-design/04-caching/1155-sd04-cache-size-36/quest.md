---
slug: "sd04-cache-size-36"
title: "Design Drill: Sizing a cache #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **400,000** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.043 GB","2.8 GB","0.43 GB","4.3 GB"],"answer":2},{"prompt":"You have **500,000** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.15 GB","1.5 GB","3 GB","0.015 GB"],"answer":0},{"prompt":"You have **4.7 million** items, and the hottest **10%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["33 GB","0.033 GB","3.3 GB","0.33 GB"],"answer":2},{"prompt":"You have **6.2 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.0062 GB","0.068 GB","6.8 GB","0.68 GB"],"answer":3},{"prompt":"You have **1.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.9 GB","5.7 GB","0.29 GB","0.029 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #36

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
