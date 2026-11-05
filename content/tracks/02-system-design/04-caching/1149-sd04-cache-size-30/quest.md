---
slug: "sd04-cache-size-30"
title: "Design Drill: Sizing a cache #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **5.7 million** items, and the hottest **25%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["30 GB","3 GB","12 GB","0.3 GB"],"answer":1},{"prompt":"You have **200,000** items, and the hottest **25%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1 GB","2.5 GB","0.025 GB","0.25 GB"],"answer":3},{"prompt":"You have **6.6 million** items, and the hottest **20%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.1 GB","0.81 GB","81 GB","40 GB"],"answer":0},{"prompt":"You have **4.8 million** items, and the hottest **20%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["78 GB","7.8 GB","39 GB","0.78 GB"],"answer":1},{"prompt":"You have **7.6 million** items, and the hottest **15%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.13 GB","1.3 GB","8.4 GB","13 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #30

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
