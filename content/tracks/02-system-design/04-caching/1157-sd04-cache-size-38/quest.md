---
slug: "sd04-cache-size-38"
title: "Design Drill: Sizing a cache #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.77 GB","15 GB","7.7 GB","0.077 GB"],"answer":0},{"prompt":"You have **1.9 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.021 GB","0.0019 GB","0.21 GB","2.1 GB"],"answer":2},{"prompt":"You have **5.5 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["28 GB","0.28 GB","0.028 GB","2.8 GB"],"answer":3},{"prompt":"You have **8 million** items, and the hottest **10%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.49 GB","0.048 GB","49 GB","4.9 GB"],"answer":3},{"prompt":"You have **2 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["12 GB","1.8 GB","18 GB","0.18 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #38

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
