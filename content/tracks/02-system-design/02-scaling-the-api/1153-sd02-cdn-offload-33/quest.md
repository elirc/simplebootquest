---
slug: "sd02-cdn-offload-33"
title: "Design Drill: CDN offload #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**35,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~17,500","~700","~35,000","~17,850"],"answer":3,"explanation":"Dynamic 17,500 + cache misses 350 ≈ 17,850."},{"prompt":"**17,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~9630","~17,500","~1750","~8750"],"answer":0,"explanation":"Dynamic 8750 + cache misses 875 ≈ 9630."},{"prompt":"**12,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1200","~3600","~4440","~12,000"],"answer":2,"explanation":"Dynamic 3600 + cache misses 840 ≈ 4440."},{"prompt":"**21,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~8600","~9250","~21,500","~1080"],"answer":1,"explanation":"Dynamic 8600 + cache misses 645 ≈ 9250."},{"prompt":"**19,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~5970","~5700","~380","~19,000"],"answer":0,"explanation":"Dynamic 5700 + cache misses 266 ≈ 5970."}]
---
# Design Drill: CDN offload #33

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
