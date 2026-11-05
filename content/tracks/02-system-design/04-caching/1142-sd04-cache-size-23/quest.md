---
slug: "sd04-cache-size-23"
title: "Design Drill: Sizing a cache #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **800,000** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["4.1 GB","0.061 GB","0.61 GB","6.1 GB"],"answer":2},{"prompt":"You have **1.9 million** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.12 GB","7.8 GB","1.2 GB","12 GB"],"answer":2},{"prompt":"You have **2.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["5.9 GB","12 GB","0.059 GB","0.59 GB"],"answer":3},{"prompt":"You have **4.8 million** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1 GB","0.1 GB","0.0096 GB","10 GB"],"answer":0},{"prompt":"You have **4.5 million** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.4 GB","0.24 GB","9.4 GB","24 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #23

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
