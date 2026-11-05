---
slug: "sd04-cache-size-8"
title: "Design Drill: Sizing a cache #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **3.1 million** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["33 GB","22 GB","0.33 GB","3.3 GB"],"answer":3},{"prompt":"You have **1.2 million** items, and the hottest **5%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.043 GB","0.43 GB","8.5 GB","4.3 GB"],"answer":1},{"prompt":"You have **1.3 million** items, and the hottest **10%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7.9 GB","0.79 GB","0.079 GB","0.0078 GB"],"answer":1},{"prompt":"You have **7.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.5 GB","0.15 GB","15 GB","30 GB"],"answer":0},{"prompt":"You have **6.8 million** items, and the hottest **10%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["28 GB","2.8 GB","0.027 GB","0.28 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #8

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
