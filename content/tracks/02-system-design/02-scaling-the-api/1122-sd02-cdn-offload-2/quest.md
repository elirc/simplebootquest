---
slug: "sd02-cdn-offload-2"
title: "Design Drill: CDN offload #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**19,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1710","~19,000","~3610","~1900"],"answer":2,"explanation":"Dynamic 1900 + cache misses 1710 ≈ 3610."},{"prompt":"**15,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~7500","~7880","~15,000","~750"],"answer":1,"explanation":"Dynamic 7500 + cache misses 375 ≈ 7880."},{"prompt":"**25,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1280","~25,500","~12,750","~13,388"],"answer":3,"explanation":"Dynamic 12,750 + cache misses 638 ≈ 13,388."},{"prompt":"**1000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~600","~1000","~640","~100"],"answer":2,"explanation":"Dynamic 600 + cache misses 40 ≈ 640."},{"prompt":"**13,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~13,500","~675","~1350","~1960"],"answer":3,"explanation":"Dynamic 1350 + cache misses 608 ≈ 1960."}]
---
# Design Drill: CDN offload #2

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
