---
slug: "sd02-cdn-offload-53"
title: "Design Drill: CDN offload #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**37,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~37,500","~5440","~1880","~3750"],"answer":1,"explanation":"Dynamic 3750 + cache misses 1690 ≈ 5440."},{"prompt":"**25,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~15,300","~15,504","~25,500","~510"],"answer":1,"explanation":"Dynamic 15,300 + cache misses 204 ≈ 15,504."},{"prompt":"**11,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~11,500","~4600","~4740","~230"],"answer":2,"explanation":"Dynamic 4600 + cache misses 138 ≈ 4740."},{"prompt":"**3500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~70","~700","~756","~3500"],"answer":2,"explanation":"Dynamic 700 + cache misses 56 ≈ 756."},{"prompt":"**34,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3400","~34,000","~680","~4010"],"answer":3,"explanation":"Dynamic 3400 + cache misses 612 ≈ 4010."}]
---
# Design Drill: CDN offload #53

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
