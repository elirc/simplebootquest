---
slug: "sd04-cache-size-17"
title: "Design Drill: Sizing a cache #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **1.8 million** items, and the hottest **15%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["14 GB","0.14 GB","9.2 GB","1.4 GB"],"answer":3},{"prompt":"You have **6.3 million** items, and the hottest **5%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.19 GB","19 GB","38 GB","1.9 GB"],"answer":3},{"prompt":"You have **1.1 million** items, and the hottest **20%** get almost all reads. Each cached value is **1 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.24 GB","2.4 GB","1.2 GB","0.024 GB"],"answer":0},{"prompt":"You have **7.9 million** items, and the hottest **20%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.1 GB","0.81 GB","81 GB","40 GB"],"answer":0},{"prompt":"You have **3.9 million** items, and the hottest **20%** get almost all reads. Each cached value is **8 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.63 GB","63 GB","6.3 GB","32 GB"],"answer":2}]
---
# Design Drill: Sizing a cache #17

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
