---
slug: "sd02-cdn-offload-23"
title: "Design Drill: CDN offload #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**21,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~7040","~1050","~21,000","~6300"],"answer":0,"explanation":"Dynamic 6300 + cache misses 735 ≈ 7040."},{"prompt":"**31,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~13,545","~12,600","~31,500","~1580"],"answer":0,"explanation":"Dynamic 12,600 + cache misses 945 ≈ 13,545."},{"prompt":"**34,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~13,600","~680","~34,000","~14,008"],"answer":3,"explanation":"Dynamic 13,600 + cache misses 408 ≈ 14,008."},{"prompt":"**13,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~6500","~13,000","~650","~6830"],"answer":3,"explanation":"Dynamic 6500 + cache misses 325 ≈ 6830."},{"prompt":"**2000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1280","~200","~1200","~2000"],"answer":0,"explanation":"Dynamic 1200 + cache misses 80 ≈ 1280."}]
---
# Design Drill: CDN offload #23

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
