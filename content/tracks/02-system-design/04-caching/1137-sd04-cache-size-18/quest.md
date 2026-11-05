---
slug: "sd04-cache-size-18"
title: "Design Drill: Sizing a cache #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **4.3 million** items, and the hottest **10%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["35 GB","0.034 GB","3.5 GB","0.35 GB"],"answer":2},{"prompt":"You have **4.2 million** items, and the hottest **15%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.38 GB","26 GB","38 GB","3.8 GB"],"answer":3},{"prompt":"You have **7.5 million** items, and the hottest **10%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.03 GB","31 GB","0.31 GB","3.1 GB"],"answer":3},{"prompt":"You have **5.4 million** items, and the hottest **15%** get almost all reads. Each cached value is **4 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["33 GB","3.3 GB","22 GB","0.33 GB"],"answer":1},{"prompt":"You have **5.9 million** items, and the hottest **5%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.5 GB","0.32 GB","0.032 GB","3.2 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #18

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
