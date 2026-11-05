---
slug: "sd04-cache-size-2"
title: "Design Drill: Sizing a cache #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **3.9 million** items, and the hottest **20%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.6 GB","0.16 GB","8.2 GB","16 GB"],"answer":0},{"prompt":"You have **4.5 million** items, and the hottest **20%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["27 GB","55 GB","0.55 GB","5.5 GB"],"answer":3},{"prompt":"You have **3.3 million** items, and the hottest **10%** get almost all reads. Each cached value is **2 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.9 GB","0.069 GB","0.0066 GB","0.69 GB"],"answer":3},{"prompt":"You have **6.2 million** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["1.9 GB","19 GB","0.19 GB","38 GB"],"answer":0},{"prompt":"You have **700,000** items, and the hottest **5%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.018 GB","3.6 GB","0.18 GB","1.8 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #2

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
