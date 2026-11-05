---
slug: "sd04-cache-size-48"
title: "Design Drill: Sizing a cache #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.4 GB","40 GB","41 GB","4 GB"],"answer":3},{"prompt":"You have **2.1 million** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["4.4 GB","1.1 GB","0.11 GB","11 GB"],"answer":1},{"prompt":"You have **4.7 million** items, and the hottest **5%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.17 GB","1.7 GB","17 GB","33 GB"],"answer":1},{"prompt":"You have **7.1 million** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.2 GB","22 GB","43 GB","0.22 GB"],"answer":0},{"prompt":"You have **6.2 million** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.3 GB","0.33 GB","33 GB","13 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #48

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
