---
slug: "sd02-cdn-offload-3"
title: "Design Drill: CDN offload #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**33,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~20,770","~33,500","~1680","~20,100"],"answer":0,"explanation":"Dynamic 20,100 + cache misses 670 ≈ 20,770."},{"prompt":"**15,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~15,500","~310","~4650","~4870"],"answer":3,"explanation":"Dynamic 4650 + cache misses 217 ≈ 4870."},{"prompt":"**1500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~75","~300","~1500","~360"],"answer":3,"explanation":"Dynamic 300 + cache misses 60 ≈ 360."},{"prompt":"**36,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~7200","~36,000","~720","~7780"],"answer":3,"explanation":"Dynamic 7200 + cache misses 576 ≈ 7780."},{"prompt":"**19,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~950","~11,780","~11,400","~19,000"],"answer":1,"explanation":"Dynamic 11,400 + cache misses 380 ≈ 11,780."}]
---
# Design Drill: CDN offload #3

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
