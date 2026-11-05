---
slug: "sd02-cdn-offload-54"
title: "Design Drill: CDN offload #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**5500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~495","~5500","~1040","~550"],"answer":2,"explanation":"Dynamic 550 + cache misses 495 ≈ 1040."},{"prompt":"**18,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~9900","~18,000","~9000","~1800"],"answer":0,"explanation":"Dynamic 9000 + cache misses 900 ≈ 9900."},{"prompt":"**16,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~3130","~16,500","~1650","~1480"],"answer":0,"explanation":"Dynamic 1650 + cache misses 1480 ≈ 3130."},{"prompt":"**21,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~6450","~7200","~1080","~21,500"],"answer":1,"explanation":"Dynamic 6450 + cache misses 753 ≈ 7200."},{"prompt":"**11,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1600","~11,000","~1100","~550"],"answer":0,"explanation":"Dynamic 1100 + cache misses 495 ≈ 1600."}]
---
# Design Drill: CDN offload #54

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
