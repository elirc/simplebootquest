---
slug: "sd04-cache-size-59"
title: "Design Drill: Sizing a cache #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7.7 million** items, and the hottest **25%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.21 GB","21 GB","8.5 GB","2.1 GB"],"answer":3},{"prompt":"You have **6.7 million** items, and the hottest **5%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.24 GB","2.4 GB","24 GB","48 GB"],"answer":1},{"prompt":"You have **6.4 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["50 GB","20 GB","5 GB","0.5 GB"],"answer":2},{"prompt":"You have **1.5 million** items, and the hottest **15%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.1 GB","4.7 GB","0.047 GB","0.47 GB"],"answer":3},{"prompt":"You have **6.5 million** items, and the hottest **20%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.79 GB","40 GB","79 GB","7.9 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #59

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
