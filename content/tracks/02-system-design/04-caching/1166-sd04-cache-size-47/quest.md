---
slug: "sd04-cache-size-47"
title: "Design Drill: Sizing a cache #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **1.8 million** items, and the hottest **15%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.84 GB","5.6 GB","8.4 GB","0.084 GB"],"answer":0},{"prompt":"You have **7.2 million** items, and the hottest **10%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.3 GB","0.029 GB","3 GB","30 GB"],"answer":2},{"prompt":"You have **5.8 million** items, and the hottest **5%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.032 GB","0.32 GB","3.2 GB","6.4 GB"],"answer":1},{"prompt":"You have **5.4 million** items, and the hottest **25%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["33 GB","8.2 GB","82 GB","0.82 GB"],"answer":1},{"prompt":"You have **400,000** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.0084 GB","0.0008 GB","0.84 GB","0.084 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #47

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
