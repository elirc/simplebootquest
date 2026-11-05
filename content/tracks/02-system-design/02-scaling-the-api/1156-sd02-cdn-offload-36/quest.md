---
slug: "sd02-cdn-offload-36"
title: "Design Drill: CDN offload #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**2500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~500","~2500","~50","~540"],"answer":3,"explanation":"Dynamic 500 + cache misses 40 ≈ 540."},{"prompt":"**27,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~8640","~8250","~27,500","~550"],"answer":0,"explanation":"Dynamic 8250 + cache misses 385 ≈ 8640."},{"prompt":"**27,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~12,650","~27,500","~2750","~11,000"],"answer":0,"explanation":"Dynamic 11,000 + cache misses 1650 ≈ 12,650."},{"prompt":"**29,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~590","~14,750","~29,500","~15,045"],"answer":3,"explanation":"Dynamic 14,750 + cache misses 295 ≈ 15,045."},{"prompt":"**4500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~4500","~2250","~2360","~225"],"answer":2,"explanation":"Dynamic 2250 + cache misses 113 ≈ 2360."}]
---
# Design Drill: CDN offload #36

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
