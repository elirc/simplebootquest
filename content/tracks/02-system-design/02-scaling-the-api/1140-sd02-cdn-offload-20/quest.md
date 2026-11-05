---
slug: "sd02-cdn-offload-20"
title: "Design Drill: CDN offload #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**6500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~650","~585","~1230","~6500"],"answer":2,"explanation":"Dynamic 650 + cache misses 585 ≈ 1230."},{"prompt":"**33,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~13,400","~33,500","~1680","~14,405"],"answer":3,"explanation":"Dynamic 13,400 + cache misses 1010 ≈ 14,405."},{"prompt":"**7500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2510","~375","~7500","~2250"],"answer":0,"explanation":"Dynamic 2250 + cache misses 263 ≈ 2510."},{"prompt":"**17,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~5100","~17,000","~1700","~6290"],"answer":3,"explanation":"Dynamic 5100 + cache misses 1190 ≈ 6290."},{"prompt":"**7000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3570","~140","~7000","~3500"],"answer":0,"explanation":"Dynamic 3500 + cache misses 70 ≈ 3570."}]
---
# Design Drill: CDN offload #20

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
