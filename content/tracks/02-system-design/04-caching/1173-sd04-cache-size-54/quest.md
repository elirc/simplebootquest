---
slug: "sd04-cache-size-54"
title: "Design Drill: Sizing a cache #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **7 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["57 GB","5.7 GB","0.57 GB","0.056 GB"],"answer":1},{"prompt":"You have **6.8 million** items, and the hottest **20%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["83 GB","0.83 GB","41 GB","8.3 GB"],"answer":3},{"prompt":"You have **1.7 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.9 GB","0.069 GB","14 GB","0.69 GB"],"answer":3},{"prompt":"You have **6.2 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.05 GB","5 GB","50 GB","0.5 GB"],"answer":1},{"prompt":"You have **5.9 million** items, and the hottest **25%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.2 GB","120 GB","48 GB","12 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #54

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
