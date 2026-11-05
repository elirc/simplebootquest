---
slug: "sd04-cache-size-60"
title: "Design Drill: Sizing a cache #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **4 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["16 GB","0.16 GB","1.6 GB","32 GB"],"answer":2},{"prompt":"You have **4.9 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.54 GB","5.4 GB","0.0049 GB","0.054 GB"],"answer":0},{"prompt":"You have **2.4 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.26 GB","0.0024 GB","0.026 GB","2.6 GB"],"answer":0},{"prompt":"You have **5.8 million** items, and the hottest **5%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.09 GB","0.9 GB","9 GB","18 GB"],"answer":1},{"prompt":"You have **7.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["22 GB","2.2 GB","45 GB","0.22 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #60

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
