---
slug: "sd04-cache-size-42"
title: "Design Drill: Sizing a cache #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.1 million** items, and the hottest **5%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.13 GB","1.3 GB","13 GB","25 GB"],"answer":1},{"prompt":"You have **2.2 million** items, and the hottest **25%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["45 GB","0.45 GB","18 GB","4.5 GB"],"answer":3},{"prompt":"You have **6.2 million** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["13 GB","1.3 GB","0.13 GB","0.012 GB"],"answer":1},{"prompt":"You have **1.7 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.0085 GB","8.7 GB","0.087 GB","0.87 GB"],"answer":3},{"prompt":"You have **3.3 million** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["17 GB","25 GB","0.25 GB","2.5 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #42

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
