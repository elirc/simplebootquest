---
slug: "sd02-cdn-offload-42"
title: "Design Drill: CDN offload #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**13,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~13,500","~1210","~1350","~2560"],"answer":3,"explanation":"Dynamic 1350 + cache misses 1210 ≈ 2560."},{"prompt":"**8500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~4250","~425","~8500","~4460"],"answer":3,"explanation":"Dynamic 4250 + cache misses 213 ≈ 4460."},{"prompt":"**11,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1100","~4400","~11,000","~5060"],"answer":3,"explanation":"Dynamic 4400 + cache misses 660 ≈ 5060."},{"prompt":"**36,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~36,500","~22,630","~1830","~21,900"],"answer":1,"explanation":"Dynamic 21,900 + cache misses 730 ≈ 22,630."},{"prompt":"**4500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~450","~1350","~1670","~4500"],"answer":2,"explanation":"Dynamic 1350 + cache misses 315 ≈ 1670."}]
---
# Design Drill: CDN offload #42

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
