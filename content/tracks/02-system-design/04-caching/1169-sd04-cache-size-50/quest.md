---
slug: "sd04-cache-size-50"
title: "Design Drill: Sizing a cache #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **3.4 million** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.5 GB","17 GB","0.35 GB","35 GB"],"answer":0},{"prompt":"You have **900,000** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7.3 GB","0.073 GB","0.73 GB","0.0072 GB"],"answer":2},{"prompt":"You have **4.1 million** items, and the hottest **5%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["10 GB","0.1 GB","21 GB","1 GB"],"answer":3},{"prompt":"You have **7.2 million** items, and the hottest **10%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.043 GB","44 GB","0.44 GB","4.4 GB"],"answer":3},{"prompt":"You have **4.6 million** items, and the hottest **20%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["19 GB","0.38 GB","38 GB","3.8 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #50

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
