---
slug: "sd02-cdn-offload-49"
title: "Design Drill: CDN offload #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**9500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~9500","~1800","~855","~950"],"answer":1,"explanation":"Dynamic 950 + cache misses 855 ≈ 1800."},{"prompt":"**38,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~15,200","~38,000","~3800","~17,480"],"answer":3,"explanation":"Dynamic 15,200 + cache misses 2280 ≈ 17,480."},{"prompt":"**24,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~14,880","~1200","~14,400","~24,000"],"answer":0,"explanation":"Dynamic 14,400 + cache misses 480 ≈ 14,880."},{"prompt":"**26,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~15,600","~26,000","~2600","~16,640"],"answer":3,"explanation":"Dynamic 15,600 + cache misses 1040 ≈ 16,640."},{"prompt":"**28,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~14,535","~14,250","~28,500","~570"],"answer":0,"explanation":"Dynamic 14,250 + cache misses 285 ≈ 14,535."}]
---
# Design Drill: CDN offload #49

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
