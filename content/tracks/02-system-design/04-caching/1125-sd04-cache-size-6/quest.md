---
slug: "sd04-cache-size-6"
title: "Design Drill: Sizing a cache #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7.6 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["5.9 GB","24 GB","59 GB","0.59 GB"],"answer":0},{"prompt":"You have **4.7 million** items, and the hottest **20%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["39 GB","19 GB","0.39 GB","3.9 GB"],"answer":3},{"prompt":"You have **7.3 million** items, and the hottest **25%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["57 GB","23 GB","5.7 GB","0.57 GB"],"answer":2},{"prompt":"You have **3.6 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["33 GB","22 GB","3.3 GB","0.33 GB"],"answer":2},{"prompt":"You have **4.2 million** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.088 GB","0.0084 GB","0.88 GB","8.8 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #6

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
