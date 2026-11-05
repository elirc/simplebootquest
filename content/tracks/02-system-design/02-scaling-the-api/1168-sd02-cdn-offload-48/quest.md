---
slug: "sd02-cdn-offload-48"
title: "Design Drill: CDN offload #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**32,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~13,760","~32,000","~1600","~12,800"],"answer":0,"explanation":"Dynamic 12,800 + cache misses 960 ≈ 13,760."},{"prompt":"**27,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~16,200","~27,000","~16,740","~1350"],"answer":2,"explanation":"Dynamic 16,200 + cache misses 540 ≈ 16,740."},{"prompt":"**29,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1480","~29,500","~8850","~9880"],"answer":3,"explanation":"Dynamic 8850 + cache misses 1030 ≈ 9880."},{"prompt":"**11,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~11,000","~550","~6820","~6600"],"answer":2,"explanation":"Dynamic 6600 + cache misses 220 ≈ 6820."},{"prompt":"**8500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~8500","~425","~2550","~2850"],"answer":3,"explanation":"Dynamic 2550 + cache misses 298 ≈ 2850."}]
---
# Design Drill: CDN offload #48

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
