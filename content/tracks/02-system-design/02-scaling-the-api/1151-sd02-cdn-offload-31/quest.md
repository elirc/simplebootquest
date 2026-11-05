---
slug: "sd02-cdn-offload-31"
title: "Design Drill: CDN offload #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**21,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~12,900","~21,500","~13,760","~2150"],"answer":2,"explanation":"Dynamic 12,900 + cache misses 860 ≈ 13,760."},{"prompt":"**32,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~13,000","~32,500","~13,975","~1630"],"answer":2,"explanation":"Dynamic 13,000 + cache misses 975 ≈ 13,975."},{"prompt":"**10,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~10,000","~6080","~6000","~200"],"answer":1,"explanation":"Dynamic 6000 + cache misses 80 ≈ 6080."},{"prompt":"**17,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~6800","~7310","~850","~17,000"],"answer":1,"explanation":"Dynamic 6800 + cache misses 510 ≈ 7310."},{"prompt":"**500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~100","~50","~140","~500"],"answer":2,"explanation":"Dynamic 100 + cache misses 40 ≈ 140."}]
---
# Design Drill: CDN offload #31

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
