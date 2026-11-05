---
slug: "sd04-cache-size-34"
title: "Design Drill: Sizing a cache #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7.8 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.039 GB","0.4 GB","4 GB","40 GB"],"answer":2},{"prompt":"You have **2.8 million** items, and the hottest **15%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.8 GB","5.9 GB","0.88 GB","0.088 GB"],"answer":2},{"prompt":"You have **5.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.3 GB","3 GB","5.9 GB","0.03 GB"],"answer":0},{"prompt":"You have **7.6 million** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.1 GB","81 GB","0.81 GB","54 GB"],"answer":0},{"prompt":"You have **5.4 million** items, and the hottest **15%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["2.5 GB","25 GB","17 GB","0.25 GB"],"answer":0}]
---
# Design Drill: Sizing a cache #34

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
