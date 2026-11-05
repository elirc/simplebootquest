---
slug: "sd02-cdn-offload-34"
title: "Design Drill: CDN offload #34"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**14,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~7700","~14,000","~1400","~7000"],"answer":0,"explanation":"Dynamic 7000 + cache misses 700 ≈ 7700."},{"prompt":"**31,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~6200","~6700","~620","~31,000"],"answer":1,"explanation":"Dynamic 6200 + cache misses 496 ≈ 6700."},{"prompt":"**38,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~15,656","~38,000","~760","~15,200"],"answer":0,"explanation":"Dynamic 15,200 + cache misses 456 ≈ 15,656."},{"prompt":"**15,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~15,000","~4500","~750","~5030"],"answer":3,"explanation":"Dynamic 4500 + cache misses 525 ≈ 5030."},{"prompt":"**24,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~14,700","~24,500","~14,896","~490"],"answer":2,"explanation":"Dynamic 14,700 + cache misses 196 ≈ 14,896."}]
---
# Design Drill: CDN offload #34

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
