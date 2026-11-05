---
slug: "sd04-cache-size-10"
title: "Design Drill: Sizing a cache #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You have **800,000** items, and the hottest **15%** get almost all reads. Each cached value is **7 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.85 GB","8.5 GB","0.085 GB","5.7 GB"],"answer":0},{"prompt":"You have **5.4 million** items, and the hottest **5%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["8.4 GB","17 GB","0.84 GB","0.084 GB"],"answer":2},{"prompt":"You have **6.3 million** items, and the hottest **10%** get almost all reads. Each cached value is **5 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["0.32 GB","3.2 GB","32 GB","0.032 GB"],"answer":1},{"prompt":"You have **5.1 million** items, and the hottest **20%** get almost all reads. Each cached value is **6 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["6.2 GB","31 GB","62 GB","0.62 GB"],"answer":0},{"prompt":"You have **4.1 million** items, and the hottest **15%** get almost all reads. Each cached value is **3 KB** (+ ~0.1 KB overhead). Roughly how much memory does the cache need?","options":["19 GB","1.9 GB","13 GB","0.19 GB"],"answer":1}]
---
# Design Drill: Sizing a cache #10

Cache memory ≈ number of hot keys × (value size + overhead). Cache the **hot set** (often 10–20% of keys), not everything.
