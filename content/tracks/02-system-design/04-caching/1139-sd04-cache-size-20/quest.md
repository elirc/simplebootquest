---
slug: "sd04-cache-size-20"
title: "Design Drill: Sizing a cache #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **6.1 million** items, and the hottest **10%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.7 GB","0.0061 GB","0.67 GB","0.067 GB"],"answer":2},{"prompt":"You have **2.1 million** items, and the hottest **5%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["3.3 GB","0.033 GB","0.33 GB","6.5 GB"],"answer":2},{"prompt":"You have **6.8 million** items, and the hottest **20%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.97 GB","48 GB","9.7 GB","97 GB"],"answer":2},{"prompt":"You have **6.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["51 GB","26 GB","2.6 GB","0.26 GB"],"answer":2},{"prompt":"You have **7.1 million** items, and the hottest **5%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.18 GB","18 GB","36 GB","1.8 GB"],"answer":3}]
---
# Design Drill: Sizing a cache #20

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
