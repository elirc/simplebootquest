---
slug: "sd04-cache-size-22"
title: "Design Drill: Sizing a cache #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7.3 million** items, and the hottest **10%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["23 GB","0.23 GB","2.3 GB","0.022 GB"],"answer":2},{"prompt":"You have **1.1 million** items, and the hottest **15%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.051 GB","0.51 GB","5.1 GB","3.4 GB"],"answer":1},{"prompt":"You have **2.7 million** items, and the hottest **20%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["19 GB","0.38 GB","3.8 GB","38 GB"],"answer":2},{"prompt":"You have **7.8 million** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.3 GB","83 GB","0.83 GB","55 GB"],"answer":0},{"prompt":"You have **6.9 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["28 GB","2.8 GB","0.28 GB","56 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #22

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
