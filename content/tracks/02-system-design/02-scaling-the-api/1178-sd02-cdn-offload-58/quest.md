---
slug: "sd02-cdn-offload-58"
title: "Design Drill: CDN offload #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**29,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1480","~5900","~7080","~29,500"],"answer":2,"explanation":"Dynamic 5900 + cache misses 1180 ≈ 7080."},{"prompt":"**30,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~18,600","~18,000","~30,000","~1500"],"answer":0,"explanation":"Dynamic 18,000 + cache misses 600 ≈ 18,600."},{"prompt":"**19,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~380","~7830","~7600","~19,000"],"answer":1,"explanation":"Dynamic 7600 + cache misses 228 ≈ 7830."},{"prompt":"**5000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2150","~2000","~5000","~250"],"answer":0,"explanation":"Dynamic 2000 + cache misses 150 ≈ 2150."},{"prompt":"**14,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~280","~14,000","~7000","~7140"],"answer":3,"explanation":"Dynamic 7000 + cache misses 140 ≈ 7140."}]
---
# Design Drill: CDN offload #58

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
