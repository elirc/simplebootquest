---
slug: "sd02-cdn-offload-11"
title: "Design Drill: CDN offload #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**10,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~1050","~1240","~10,500","~210"],"answer":1,"explanation":"Dynamic 1050 + cache misses 189 ≈ 1240."},{"prompt":"**6000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1800","~2220","~6000","~600"],"answer":1,"explanation":"Dynamic 1800 + cache misses 420 ≈ 2220."},{"prompt":"**7000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~140","~7000","~2100","~2200"],"answer":3,"explanation":"Dynamic 2100 + cache misses 98 ≈ 2200."},{"prompt":"**40,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~40,000","~4000","~3600","~7600"],"answer":3,"explanation":"Dynamic 4000 + cache misses 3600 ≈ 7600."},{"prompt":"**35,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~710","~35,500","~18,105","~17,750"],"answer":2,"explanation":"Dynamic 17,750 + cache misses 355 ≈ 18,105."}]
---
# Design Drill: CDN offload #11

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
