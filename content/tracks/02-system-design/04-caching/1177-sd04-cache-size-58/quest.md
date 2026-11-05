---
slug: "sd04-cache-size-58"
title: "Design Drill: Sizing a cache #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **3.7 million** items, and the hottest **5%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["7.8 GB","0.39 GB","0.039 GB","3.9 GB"],"answer":1},{"prompt":"You have **800,000** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.24 GB","2.4 GB","4.9 GB","0.024 GB"],"answer":0},{"prompt":"You have **2 million** items, and the hottest **20%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.044 GB","4.4 GB","0.44 GB","2.2 GB"],"answer":2},{"prompt":"You have **2.5 million** items, and the hottest **25%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["51 GB","0.51 GB","5.1 GB","20 GB"],"answer":2},{"prompt":"You have **4.5 million** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.34 GB","34 GB","3.4 GB","23 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #58

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
