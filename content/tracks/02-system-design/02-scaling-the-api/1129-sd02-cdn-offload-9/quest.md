---
slug: "sd02-cdn-offload-9"
title: "Design Drill: CDN offload #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**6500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~1300","~6500","~130","~1400"],"answer":3,"explanation":"Dynamic 1300 + cache misses 104 ≈ 1400."},{"prompt":"**25,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~500","~25,000","~7850","~7500"],"answer":2,"explanation":"Dynamic 7500 + cache misses 350 ≈ 7850."},{"prompt":"**32,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~32,500","~9750","~3250","~12,025"],"answer":3,"explanation":"Dynamic 9750 + cache misses 2270 ≈ 12,025."},{"prompt":"**15,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~8140","~15,500","~775","~7750"],"answer":0,"explanation":"Dynamic 7750 + cache misses 388 ≈ 8140."},{"prompt":"**31,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~18,848","~620","~31,000","~18,600"],"answer":0,"explanation":"Dynamic 18,600 + cache misses 248 ≈ 18,848."}]
---
# Design Drill: CDN offload #9

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
