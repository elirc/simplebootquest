---
slug: "sd04-cache-size-45"
title: "Design Drill: Sizing a cache #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **1.6 million** items, and the hottest **10%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.011 GB","0.11 GB","1.1 GB","11 GB"],"answer":2},{"prompt":"You have **7.8 million** items, and the hottest **5%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.28 GB","28 GB","55 GB","2.8 GB"],"answer":3},{"prompt":"You have **4.6 million** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["47 GB","4.7 GB","0.47 GB","23 GB"],"answer":1},{"prompt":"You have **4.8 million** items, and the hottest **10%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.4 GB","0.34 GB","34 GB","0.034 GB"],"answer":0},{"prompt":"You have **4 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["37 GB","3.7 GB","0.37 GB","24 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #45

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
