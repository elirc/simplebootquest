---
slug: "sd02-cdn-offload-56"
title: "Design Drill: CDN offload #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**20,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~20,000","~5600","~4000","~2000"],"answer":1,"explanation":"Dynamic 4000 + cache misses 1600 ≈ 5600."},{"prompt":"**17,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~5860","~17,500","~5250","~875"],"answer":0,"explanation":"Dynamic 5250 + cache misses 613 ≈ 5860."},{"prompt":"**34,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~34,500","~690","~4070","~3450"],"answer":2,"explanation":"Dynamic 3450 + cache misses 621 ≈ 4070."},{"prompt":"**3500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~350","~175","~508","~3500"],"answer":2,"explanation":"Dynamic 350 + cache misses 158 ≈ 508."},{"prompt":"**1000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~620","~1000","~600","~50"],"answer":0,"explanation":"Dynamic 600 + cache misses 20 ≈ 620."}]
---
# Design Drill: CDN offload #56

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
