---
slug: "sd02-cdn-offload-12"
title: "Design Drill: CDN offload #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**25,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~5100","~1280","~25,500","~6120"],"answer":3,"explanation":"Dynamic 5100 + cache misses 1020 ≈ 6120."},{"prompt":"**16,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~5360","~16,000","~800","~4800"],"answer":0,"explanation":"Dynamic 4800 + cache misses 560 ≈ 5360."},{"prompt":"**2000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~200","~1000","~1100","~2000"],"answer":2,"explanation":"Dynamic 1000 + cache misses 100 ≈ 1100."},{"prompt":"**28,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~2560","~5410","~2850","~28,500"],"answer":1,"explanation":"Dynamic 2850 + cache misses 2560 ≈ 5410."},{"prompt":"**26,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~26,500","~530","~8320","~7950"],"answer":2,"explanation":"Dynamic 7950 + cache misses 371 ≈ 8320."}]
---
# Design Drill: CDN offload #12

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
