---
slug: "sd04-cache-size-3"
title: "Design Drill: Sizing a cache #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **1.3 million** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.99 GB","0.099 GB","6.6 GB","9.9 GB"],"answer":0},{"prompt":"You have **5.7 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.9 GB","0.029 GB","0.29 GB","29 GB"],"answer":0},{"prompt":"You have **1.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.057 GB","0.57 GB","5.7 GB","11 GB"],"answer":1},{"prompt":"You have **7.8 million** items, and the hottest **25%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.6 GB","63 GB","16 GB","160 GB"],"answer":2},{"prompt":"You have **7.5 million** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["4.6 GB","0.46 GB","31 GB","46 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #3

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
