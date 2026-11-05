---
slug: "sd02-cdn-offload-22"
title: "Design Drill: CDN offload #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**10,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~5510","~525","~5250","~10,500"],"answer":0,"explanation":"Dynamic 5250 + cache misses 263 ≈ 5510."},{"prompt":"**8000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~400","~1600","~8000","~1920"],"answer":3,"explanation":"Dynamic 1600 + cache misses 320 ≈ 1920."},{"prompt":"**1000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~500","~510","~1000","~20"],"answer":1,"explanation":"Dynamic 500 + cache misses 10 ≈ 510."},{"prompt":"**33,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~33,500","~16,750","~3350","~18,425"],"answer":3,"explanation":"Dynamic 16,750 + cache misses 1670 ≈ 18,425."},{"prompt":"**4000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~80","~400","~472","~4000"],"answer":2,"explanation":"Dynamic 400 + cache misses 72 ≈ 472."}]
---
# Design Drill: CDN offload #22

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
