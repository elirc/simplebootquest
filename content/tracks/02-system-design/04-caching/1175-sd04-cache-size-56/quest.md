---
slug: "sd04-cache-size-56"
title: "Design Drill: Sizing a cache #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **4.3 million** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["26 GB","0.26 GB","2.6 GB","18 GB"],"answer":2},{"prompt":"You have **7.3 million** items, and the hottest **15%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8 GB","1.2 GB","0.12 GB","12 GB"],"answer":1},{"prompt":"You have **3.5 million** items, and the hottest **25%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["21 GB","0.53 GB","5.3 GB","53 GB"],"answer":2},{"prompt":"You have **7.9 million** items, and the hottest **25%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["32 GB","8.1 GB","81 GB","0.81 GB"],"answer":1},{"prompt":"You have **3.1 million** items, and the hottest **25%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.4 GB","0.85 GB","8.5 GB","0.085 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #56

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
