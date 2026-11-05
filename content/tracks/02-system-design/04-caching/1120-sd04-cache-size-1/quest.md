---
slug: "sd04-cache-size-1"
title: "Design Drill: Sizing a cache #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["4.7 GB","47 GB","0.47 GB","19 GB"],"answer":0},{"prompt":"You have **6.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.16 GB","16 GB","32 GB","1.6 GB"],"answer":3},{"prompt":"You have **6 million** items, and the hottest **10%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.37 GB","0.036 GB","3.7 GB","37 GB"],"answer":2},{"prompt":"You have **1.7 million** items, and the hottest **20%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["14 GB","7 GB","1.4 GB","0.14 GB"],"answer":2},{"prompt":"You have **4.8 million** items, and the hottest **20%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["5.3 GB","1.1 GB","11 GB","0.11 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #1

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
