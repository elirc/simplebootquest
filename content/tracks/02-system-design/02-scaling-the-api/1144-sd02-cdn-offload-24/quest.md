---
slug: "sd02-cdn-offload-24"
title: "Design Drill: CDN offload #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**5500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~275","~5500","~1320","~1100"],"answer":2,"explanation":"Dynamic 1100 + cache misses 220 ≈ 1320."},{"prompt":"**34,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~14,835","~1730","~34,500","~13,800"],"answer":0,"explanation":"Dynamic 13,800 + cache misses 1040 ≈ 14,835."},{"prompt":"**500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~500","~10","~157","~150"],"answer":2,"explanation":"Dynamic 150 + cache misses 7 ≈ 157."},{"prompt":"**35,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~35,500","~10,650","~13,135","~3550"],"answer":2,"explanation":"Dynamic 10,650 + cache misses 2480 ≈ 13,135."},{"prompt":"**24,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~24,000","~7540","~7200","~480"],"answer":1,"explanation":"Dynamic 7200 + cache misses 336 ≈ 7540."}]
---
# Design Drill: CDN offload #24

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
