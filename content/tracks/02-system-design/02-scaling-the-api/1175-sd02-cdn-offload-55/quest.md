---
slug: "sd02-cdn-offload-55"
title: "Design Drill: CDN offload #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**2500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~250","~2500","~1500","~1600"],"answer":3,"explanation":"Dynamic 1500 + cache misses 100 ≈ 1600."},{"prompt":"**15,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~5740","~15,500","~1550","~4650"],"answer":0,"explanation":"Dynamic 4650 + cache misses 1080 ≈ 5740."},{"prompt":"**1000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~50","~145","~100","~1000"],"answer":1,"explanation":"Dynamic 100 + cache misses 45 ≈ 145."},{"prompt":"**39,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~23,700","~39,500","~24,016","~790"],"answer":2,"explanation":"Dynamic 23,700 + cache misses 316 ≈ 24,016."},{"prompt":"**21,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~21,500","~2150","~6020","~4300"],"answer":2,"explanation":"Dynamic 4300 + cache misses 1720 ≈ 6020."}]
---
# Design Drill: CDN offload #55

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
