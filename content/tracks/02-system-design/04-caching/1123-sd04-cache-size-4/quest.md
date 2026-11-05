---
slug: "sd04-cache-size-4"
title: "Design Drill: Sizing a cache #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5.7 million** items, and the hottest **10%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.5 GB","35 GB","0.034 GB","0.35 GB"],"answer":0},{"prompt":"You have **2 million** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.11 GB","11 GB","1.1 GB","4.2 GB"],"answer":2},{"prompt":"You have **4.6 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["28 GB","0.42 GB","42 GB","4.2 GB"],"answer":3},{"prompt":"You have **3.7 million** items, and the hottest **20%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.081 GB","8.1 GB","0.81 GB","4.1 GB"],"answer":2},{"prompt":"You have **1.8 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.009 GB","9.2 GB","0.092 GB","0.92 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #4

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
