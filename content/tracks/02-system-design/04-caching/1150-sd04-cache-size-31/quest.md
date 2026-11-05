---
slug: "sd04-cache-size-31"
title: "Design Drill: Sizing a cache #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7.6 million** items, and the hottest **10%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["31 GB","3.1 GB","0.31 GB","0.03 GB"],"answer":1},{"prompt":"You have **7.7 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.7 GB","70 GB","7 GB","47 GB"],"answer":2},{"prompt":"You have **4.5 million** items, and the hottest **10%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.2 GB","0.032 GB","32 GB","0.32 GB"],"answer":0},{"prompt":"You have **4 million** items, and the hottest **20%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.4 GB","0.17 GB","17 GB","1.7 GB"],"answer":3},{"prompt":"You have **5.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["22 GB","1.1 GB","11 GB","0.11 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #31

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
