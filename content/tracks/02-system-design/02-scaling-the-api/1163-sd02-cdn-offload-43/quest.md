---
slug: "sd02-cdn-offload-43"
title: "Design Drill: CDN offload #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**18,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~5550","~5810","~370","~18,500"],"answer":1,"explanation":"Dynamic 5550 + cache misses 259 ≈ 5810."},{"prompt":"**20,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~8200","~20,500","~410","~8450"],"answer":3,"explanation":"Dynamic 8200 + cache misses 246 ≈ 8450."},{"prompt":"**5500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~3410","~5500","~3300","~275"],"answer":0,"explanation":"Dynamic 3300 + cache misses 110 ≈ 3410."},{"prompt":"**7000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~4200","~4480","~700","~7000"],"answer":1,"explanation":"Dynamic 4200 + cache misses 280 ≈ 4480."},{"prompt":"**3500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~3500","~1170","~1050","~175"],"answer":1,"explanation":"Dynamic 1050 + cache misses 123 ≈ 1170."}]
---
# Design Drill: CDN offload #43

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
