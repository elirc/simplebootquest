---
slug: "sd04-cache-size-32"
title: "Design Drill: Sizing a cache #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **2.1 million** items, and the hottest **25%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.32 GB","3.2 GB","13 GB","32 GB"],"answer":1},{"prompt":"You have **7.3 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8 GB","0.8 GB","0.0073 GB","0.08 GB"],"answer":1},{"prompt":"You have **300,000** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.18 GB","1.8 GB","1.2 GB","0.018 GB"],"answer":0},{"prompt":"You have **3.1 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.025 GB","2.5 GB","0.25 GB","25 GB"],"answer":1},{"prompt":"You have **1.5 million** items, and the hottest **20%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.033 GB","0.33 GB","3.3 GB","1.6 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #32

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
