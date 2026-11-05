---
slug: "sd02-cdn-offload-21"
title: "Design Drill: CDN offload #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**22,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~8800","~2200","~22,000","~10,120"],"answer":3,"explanation":"Dynamic 8800 + cache misses 1320 ≈ 10,120."},{"prompt":"**31,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~12,400","~12,772","~31,000","~620"],"answer":1,"explanation":"Dynamic 12,400 + cache misses 372 ≈ 12,772."},{"prompt":"**30,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1500","~7200","~6000","~30,000"],"answer":1,"explanation":"Dynamic 6000 + cache misses 1200 ≈ 7200."},{"prompt":"**13,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~675","~6750","~13,500","~7090"],"answer":3,"explanation":"Dynamic 6750 + cache misses 338 ≈ 7090."},{"prompt":"**32,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~32,000","~8960","~6400","~3200"],"answer":1,"explanation":"Dynamic 6400 + cache misses 2560 ≈ 8960."}]
---
# Design Drill: CDN offload #21

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
