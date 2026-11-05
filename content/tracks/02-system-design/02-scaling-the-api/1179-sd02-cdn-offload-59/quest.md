---
slug: "sd02-cdn-offload-59"
title: "Design Drill: CDN offload #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~200","~1000","~20","~216"],"answer":3,"explanation":"Dynamic 200 + cache misses 16 ≈ 216."},{"prompt":"**28,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~9550","~28,500","~1430","~8550"],"answer":0,"explanation":"Dynamic 8550 + cache misses 998 ≈ 9550."},{"prompt":"**28,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1430","~11,400","~28,500","~12,255"],"answer":3,"explanation":"Dynamic 11,400 + cache misses 855 ≈ 12,255."},{"prompt":"**19,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~19,000","~380","~9690","~9500"],"answer":2,"explanation":"Dynamic 9500 + cache misses 190 ≈ 9690."},{"prompt":"**32,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~2920","~32,500","~6170","~3250"],"answer":2,"explanation":"Dynamic 3250 + cache misses 2920 ≈ 6170."}]
---
# Design Drill: CDN offload #59

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
