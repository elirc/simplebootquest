---
slug: "sd04-cache-size-40"
title: "Design Drill: Sizing a cache #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5.1 million** items, and the hottest **20%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.42 GB","4.2 GB","21 GB","42 GB"],"answer":1},{"prompt":"You have **3.9 million** items, and the hottest **20%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["24 GB","2.4 GB","0.24 GB","12 GB"],"answer":1},{"prompt":"You have **7.5 million** items, and the hottest **25%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["130 GB","1.3 GB","13 GB","53 GB"],"answer":2},{"prompt":"You have **4 million** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["16 GB","0.25 GB","2.5 GB","25 GB"],"answer":2},{"prompt":"You have **6.6 million** items, and the hottest **5%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["14 GB","6.9 GB","0.69 GB","0.069 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #40

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
