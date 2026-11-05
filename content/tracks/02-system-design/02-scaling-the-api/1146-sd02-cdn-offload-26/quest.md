---
slug: "sd02-cdn-offload-26"
title: "Design Drill: CDN offload #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**35,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~35,000","~15,050","~1750","~14,000"],"answer":1,"explanation":"Dynamic 14,000 + cache misses 1050 ≈ 15,050."},{"prompt":"**31,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~31,000","~15,810","~620","~15,500"],"answer":1,"explanation":"Dynamic 15,500 + cache misses 310 ≈ 15,810."},{"prompt":"**21,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~2150","~8600","~9890","~21,500"],"answer":2,"explanation":"Dynamic 8600 + cache misses 1290 ≈ 9890."},{"prompt":"**10,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~500","~4300","~10,000","~4000"],"answer":1,"explanation":"Dynamic 4000 + cache misses 300 ≈ 4300."},{"prompt":"**10,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~945","~10,500","~1050","~1990"],"answer":3,"explanation":"Dynamic 1050 + cache misses 945 ≈ 1990."}]
---
# Design Drill: CDN offload #26

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
