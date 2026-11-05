---
slug: "sd02-cdn-offload-35"
title: "Design Drill: CDN offload #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**21,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~21,000","~6300","~2100","~7770"],"answer":3,"explanation":"Dynamic 6300 + cache misses 1470 ≈ 7770."},{"prompt":"**25,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~7140","~25,500","~5100","~2550"],"answer":0,"explanation":"Dynamic 5100 + cache misses 2040 ≈ 7140."},{"prompt":"**12,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~12,000","~600","~7200","~7440"],"answer":3,"explanation":"Dynamic 7200 + cache misses 240 ≈ 7440."},{"prompt":"**5000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~950","~450","~500","~5000"],"answer":0,"explanation":"Dynamic 500 + cache misses 450 ≈ 950."},{"prompt":"**6000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~300","~6000","~2400","~2580"],"answer":3,"explanation":"Dynamic 2400 + cache misses 180 ≈ 2580."}]
---
# Design Drill: CDN offload #35

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
