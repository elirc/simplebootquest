---
slug: "sd04-cache-size-14"
title: "Design Drill: Sizing a cache #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **1.1 million** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.084 GB","8.4 GB","5.6 GB","0.84 GB"],"answer":3},{"prompt":"You have **700,000** items, and the hottest **5%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.77 GB","0.038 GB","0.39 GB","0.0039 GB"],"answer":1},{"prompt":"You have **6 million** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["31 GB","61 GB","0.61 GB","6.1 GB"],"answer":3},{"prompt":"You have **7.1 million** items, and the hottest **10%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.9 GB","0.29 GB","0.028 GB","29 GB"],"answer":0},{"prompt":"You have **1.3 million** items, and the hottest **25%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.7 GB","17 GB","0.17 GB","6.6 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #14

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
