---
slug: "sd02-cdn-offload-4"
title: "Design Drill: CDN offload #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**22,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~22,500","~13,680","~13,500","~450"],"answer":1,"explanation":"Dynamic 13,500 + cache misses 180 ≈ 13,680."},{"prompt":"**38,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3800","~760","~38,000","~4480"],"answer":3,"explanation":"Dynamic 3800 + cache misses 684 ≈ 4480."},{"prompt":"**6500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~6500","~3900","~4160","~650"],"answer":2,"explanation":"Dynamic 3900 + cache misses 260 ≈ 4160."},{"prompt":"**9500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3910","~9500","~190","~3800"],"answer":0,"explanation":"Dynamic 3800 + cache misses 114 ≈ 3910."},{"prompt":"**39,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~18,170","~3950","~15,800","~39,500"],"answer":0,"explanation":"Dynamic 15,800 + cache misses 2370 ≈ 18,170."}]
---
# Design Drill: CDN offload #4

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
