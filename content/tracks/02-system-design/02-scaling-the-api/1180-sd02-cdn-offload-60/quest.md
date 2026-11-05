---
slug: "sd02-cdn-offload-60"
title: "Design Drill: CDN offload #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**2000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~200","~2000","~740","~600"],"answer":2,"explanation":"Dynamic 600 + cache misses 140 ≈ 740."},{"prompt":"**2500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~1280","~50","~1250","~2500"],"answer":0,"explanation":"Dynamic 1250 + cache misses 25 ≈ 1280."},{"prompt":"**13,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3900","~260","~4080","~13,000"],"answer":2,"explanation":"Dynamic 3900 + cache misses 182 ≈ 4080."},{"prompt":"**12,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1200","~1740","~600","~12,000"],"answer":1,"explanation":"Dynamic 1200 + cache misses 540 ≈ 1740."},{"prompt":"**30,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~9150","~610","~30,500","~9580"],"answer":3,"explanation":"Dynamic 9150 + cache misses 427 ≈ 9580."}]
---
# Design Drill: CDN offload #60

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
