---
slug: "sd04-cache-size-39"
title: "Design Drill: Sizing a cache #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **2.4 million** items, and the hottest **20%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["19 GB","3.9 GB","39 GB","0.39 GB"],"answer":1},{"prompt":"You have **5.9 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["46 GB","4.6 GB","18 GB","0.46 GB"],"answer":1},{"prompt":"You have **1.2 million** items, and the hottest **5%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.1 GB","0.031 GB","6.1 GB","0.31 GB"],"answer":3},{"prompt":"You have **2.1 million** items, and the hottest **15%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.098 GB","9.8 GB","0.98 GB","6.5 GB"],"answer":2},{"prompt":"You have **4.8 million** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.51 GB","34 GB","5.1 GB","51 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #39

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
