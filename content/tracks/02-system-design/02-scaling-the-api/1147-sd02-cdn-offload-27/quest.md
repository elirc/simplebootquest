---
slug: "sd02-cdn-offload-27"
title: "Design Drill: CDN offload #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**16,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1600","~2320","~16,000","~800"],"answer":1,"explanation":"Dynamic 1600 + cache misses 720 ≈ 2320."},{"prompt":"**33,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~7240","~6700","~670","~33,500"],"answer":0,"explanation":"Dynamic 6700 + cache misses 536 ≈ 7240."},{"prompt":"**10,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~4330","~210","~10,500","~4200"],"answer":0,"explanation":"Dynamic 4200 + cache misses 126 ≈ 4330."},{"prompt":"**30,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~3000","~16,500","~30,000","~15,000"],"answer":1,"explanation":"Dynamic 15,000 + cache misses 1500 ≈ 16,500."},{"prompt":"**15,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2180","~750","~15,000","~1500"],"answer":0,"explanation":"Dynamic 1500 + cache misses 675 ≈ 2180."}]
---
# Design Drill: CDN offload #27

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
