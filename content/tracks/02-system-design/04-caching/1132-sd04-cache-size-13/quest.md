---
slug: "sd04-cache-size-13"
title: "Design Drill: Sizing a cache #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.2 million** items, and the hottest **5%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.8 GB","3.4 GB","0.034 GB","0.34 GB"],"answer":3},{"prompt":"You have **2.2 million** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.17 GB","11 GB","1.7 GB","17 GB"],"answer":2},{"prompt":"You have **1.9 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.0095 GB","0.97 GB","9.7 GB","0.097 GB"],"answer":1},{"prompt":"You have **5.8 million** items, and the hottest **20%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.6 GB","18 GB","0.36 GB","36 GB"],"answer":0},{"prompt":"You have **4.2 million** items, and the hottest **25%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["43 GB","17 GB","0.43 GB","4.3 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #13

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
