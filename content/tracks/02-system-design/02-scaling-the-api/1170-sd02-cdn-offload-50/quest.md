---
slug: "sd02-cdn-offload-50"
title: "Design Drill: CDN offload #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**16,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~6600","~1650","~7590","~16,500"],"answer":2,"explanation":"Dynamic 6600 + cache misses 990 ≈ 7590."},{"prompt":"**22,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1100","~7370","~6600","~22,000"],"answer":1,"explanation":"Dynamic 6600 + cache misses 770 ≈ 7370."},{"prompt":"**30,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1500","~30,000","~9000","~10,050"],"answer":3,"explanation":"Dynamic 9000 + cache misses 1050 ≈ 10,050."},{"prompt":"**3000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~354","~60","~3000","~300"],"answer":0,"explanation":"Dynamic 300 + cache misses 54 ≈ 354."},{"prompt":"**36,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~36,500","~1830","~8760","~7300"],"answer":2,"explanation":"Dynamic 7300 + cache misses 1460 ≈ 8760."}]
---
# Design Drill: CDN offload #50

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
