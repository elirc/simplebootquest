---
slug: "sd02-cdn-offload-32"
title: "Design Drill: CDN offload #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**25,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~11,500","~25,000","~2500","~10,000"],"answer":0,"explanation":"Dynamic 10,000 + cache misses 1500 ≈ 11,500."},{"prompt":"**13,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~13,500","~4050","~5000","~1350"],"answer":2,"explanation":"Dynamic 4050 + cache misses 945 ≈ 5000."},{"prompt":"**36,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~36,500","~21,900","~23,360","~3650"],"answer":2,"explanation":"Dynamic 21,900 + cache misses 1460 ≈ 23,360."},{"prompt":"**39,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~23,400","~23,712","~780","~39,000"],"answer":1,"explanation":"Dynamic 23,400 + cache misses 312 ≈ 23,712."},{"prompt":"**6500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~4030","~3900","~325","~6500"],"answer":0,"explanation":"Dynamic 3900 + cache misses 130 ≈ 4030."}]
---
# Design Drill: CDN offload #32

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
