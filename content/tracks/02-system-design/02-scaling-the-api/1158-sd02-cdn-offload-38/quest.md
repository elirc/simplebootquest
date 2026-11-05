---
slug: "sd02-cdn-offload-38"
title: "Design Drill: CDN offload #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**14,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~290","~14,500","~7400","~7250"],"answer":2,"explanation":"Dynamic 7250 + cache misses 145 ≈ 7400."},{"prompt":"**14,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~280","~8400","~8510","~14,000"],"answer":2,"explanation":"Dynamic 8400 + cache misses 112 ≈ 8510."},{"prompt":"**22,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2200","~22,000","~3190","~1100"],"answer":2,"explanation":"Dynamic 2200 + cache misses 990 ≈ 3190."},{"prompt":"**10,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~2270","~210","~10,500","~2100"],"answer":0,"explanation":"Dynamic 2100 + cache misses 168 ≈ 2270."},{"prompt":"**20,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1000","~10,000","~20,000","~10,500"],"answer":3,"explanation":"Dynamic 10,000 + cache misses 500 ≈ 10,500."}]
---
# Design Drill: CDN offload #38

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
