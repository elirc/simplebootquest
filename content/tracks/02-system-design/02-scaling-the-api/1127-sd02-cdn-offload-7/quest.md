---
slug: "sd02-cdn-offload-7"
title: "Design Drill: CDN offload #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**28,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~560","~28,000","~6050","~5600"],"answer":2,"explanation":"Dynamic 5600 + cache misses 448 ≈ 6050."},{"prompt":"**9000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~180","~3600","~9000","~3710"],"answer":3,"explanation":"Dynamic 3600 + cache misses 108 ≈ 3710."},{"prompt":"**6000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~6000","~540","~1140","~600"],"answer":2,"explanation":"Dynamic 600 + cache misses 540 ≈ 1140."},{"prompt":"**17,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~10,200","~1700","~17,000","~10,880"],"answer":3,"explanation":"Dynamic 10,200 + cache misses 680 ≈ 10,880."},{"prompt":"**7500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~750","~1500","~2100","~7500"],"answer":2,"explanation":"Dynamic 1500 + cache misses 600 ≈ 2100."}]
---
# Design Drill: CDN offload #7

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
