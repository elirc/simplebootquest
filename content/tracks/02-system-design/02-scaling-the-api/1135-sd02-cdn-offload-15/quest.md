---
slug: "sd02-cdn-offload-15"
title: "Design Drill: CDN offload #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**40,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~24,000","~4000","~40,000","~25,600"],"answer":3,"explanation":"Dynamic 24,000 + cache misses 1600 ≈ 25,600."},{"prompt":"**29,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~29,500","~590","~3480","~2950"],"answer":2,"explanation":"Dynamic 2950 + cache misses 531 ≈ 3480."},{"prompt":"**3000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~570","~3000","~300","~270"],"answer":0,"explanation":"Dynamic 300 + cache misses 270 ≈ 570."},{"prompt":"**34,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~3450","~9660","~6900","~34,500"],"answer":1,"explanation":"Dynamic 6900 + cache misses 2760 ≈ 9660."},{"prompt":"**10,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1000","~3700","~10,000","~3000"],"answer":1,"explanation":"Dynamic 3000 + cache misses 700 ≈ 3700."}]
---
# Design Drill: CDN offload #15

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
