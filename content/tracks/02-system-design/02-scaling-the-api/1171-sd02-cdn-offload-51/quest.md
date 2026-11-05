---
slug: "sd02-cdn-offload-51"
title: "Design Drill: CDN offload #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**6000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~120","~3000","~3060","~6000"],"answer":2,"explanation":"Dynamic 3000 + cache misses 60 ≈ 3060."},{"prompt":"**34,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~34,000","~3400","~6460","~3060"],"answer":2,"explanation":"Dynamic 3400 + cache misses 3060 ≈ 6460."},{"prompt":"**5500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~550","~1540","~5500","~1100"],"answer":1,"explanation":"Dynamic 1100 + cache misses 440 ≈ 1540."},{"prompt":"**13,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~650","~5200","~13,000","~5590"],"answer":3,"explanation":"Dynamic 5200 + cache misses 390 ≈ 5590."},{"prompt":"**28,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~28,000","~8400","~8790","~560"],"answer":2,"explanation":"Dynamic 8400 + cache misses 392 ≈ 8790."}]
---
# Design Drill: CDN offload #51

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
