---
slug: "sd04-cache-size-5"
title: "Design Drill: Sizing a cache #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **2.1 million** items, and the hottest **10%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.086 GB","8.6 GB","0.0084 GB","0.86 GB"],"answer":3},{"prompt":"You have **2.6 million** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.4 GB","5.5 GB","0.14 GB","14 GB"],"answer":0},{"prompt":"You have **800,000** items, and the hottest **25%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.3 GB","0.082 GB","8.2 GB","0.82 GB"],"answer":3},{"prompt":"You have **3.3 million** items, and the hottest **15%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.054 GB","0.54 GB","3.6 GB","5.4 GB"],"answer":1},{"prompt":"You have **2.7 million** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["5.7 GB","0.057 GB","0.0054 GB","0.57 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #5

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
