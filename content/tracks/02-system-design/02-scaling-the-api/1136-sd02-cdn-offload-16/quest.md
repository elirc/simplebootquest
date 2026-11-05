---
slug: "sd02-cdn-offload-16"
title: "Design Drill: CDN offload #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**31,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~31,000","~2790","~3100","~5890"],"answer":3,"explanation":"Dynamic 3100 + cache misses 2790 ≈ 5890."},{"prompt":"**9000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~9000","~1310","~900","~450"],"answer":1,"explanation":"Dynamic 900 + cache misses 405 ≈ 1310."},{"prompt":"**20,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~12,710","~12,300","~20,500","~1030"],"answer":0,"explanation":"Dynamic 12,300 + cache misses 410 ≈ 12,710."},{"prompt":"**28,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~11,742","~28,500","~570","~11,400"],"answer":0,"explanation":"Dynamic 11,400 + cache misses 342 ≈ 11,742."},{"prompt":"**39,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~39,500","~7500","~3550","~3950"],"answer":1,"explanation":"Dynamic 3950 + cache misses 3550 ≈ 7500."}]
---
# Design Drill: CDN offload #16

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
