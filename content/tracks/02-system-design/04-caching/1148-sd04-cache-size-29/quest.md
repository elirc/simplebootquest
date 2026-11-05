---
slug: "sd04-cache-size-29"
title: "Design Drill: Sizing a cache #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5.4 million** items, and the hottest **20%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.77 GB","77 GB","7.7 GB","38 GB"],"answer":2},{"prompt":"You have **6 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.4 GB","24 GB","49 GB","0.24 GB"],"answer":0},{"prompt":"You have **3.7 million** items, and the hottest **20%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["23 GB","45 GB","0.45 GB","4.5 GB"],"answer":3},{"prompt":"You have **1.7 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["16 GB","0.16 GB","1.6 GB","10 GB"],"answer":2},{"prompt":"You have **3.8 million** items, and the hottest **10%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["27 GB","2.7 GB","0.027 GB","0.27 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #29

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
