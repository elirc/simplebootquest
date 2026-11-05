---
slug: "sd04-cache-size-9"
title: "Design Drill: Sizing a cache #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.1 million** items, and the hottest **20%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["38 GB","0.38 GB","3.8 GB","19 GB"],"answer":2},{"prompt":"You have **5.3 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["16 GB","41 GB","4.1 GB","0.41 GB"],"answer":2},{"prompt":"You have **5.9 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["24 GB","48 GB","2.4 GB","0.24 GB"],"answer":2},{"prompt":"You have **1.9 million** items, and the hottest **5%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.01 GB","0.1 GB","1 GB","2.1 GB"],"answer":1},{"prompt":"You have **6 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.49 GB","4.9 GB","0.048 GB","49 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #9

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
