---
slug: "sd02-cdn-offload-29"
title: "Design Drill: CDN offload #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**22,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~4750","~22,000","~4400","~440"],"answer":0,"explanation":"Dynamic 4400 + cache misses 352 ≈ 4750."},{"prompt":"**13,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~8100","~13,500","~270","~8210"],"answer":3,"explanation":"Dynamic 8100 + cache misses 108 ≈ 8210."},{"prompt":"**8500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~8500","~4340","~170","~4250"],"answer":1,"explanation":"Dynamic 4250 + cache misses 85 ≈ 4340."},{"prompt":"**13,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~13,000","~3900","~4810","~1300"],"answer":2,"explanation":"Dynamic 3900 + cache misses 910 ≈ 4810."},{"prompt":"**26,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~13,515","~530","~13,250","~26,500"],"answer":0,"explanation":"Dynamic 13,250 + cache misses 265 ≈ 13,515."}]
---
# Design Drill: CDN offload #29

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
