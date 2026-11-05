---
slug: "sd02-cdn-offload-30"
title: "Design Drill: CDN offload #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**37,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~11,618","~37,000","~11,100","~740"],"answer":0,"explanation":"Dynamic 11,100 + cache misses 518 ≈ 11,618."},{"prompt":"**3000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~150","~1500","~3000","~1580"],"answer":3,"explanation":"Dynamic 1500 + cache misses 75 ≈ 1580."},{"prompt":"**36,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~19,163","~36,500","~18,250","~1830"],"answer":0,"explanation":"Dynamic 18,250 + cache misses 913 ≈ 19,163."},{"prompt":"**32,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~32,500","~650","~3830","~3250"],"answer":2,"explanation":"Dynamic 3250 + cache misses 585 ≈ 3830."},{"prompt":"**17,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~17,500","~875","~9190","~8750"],"answer":2,"explanation":"Dynamic 8750 + cache misses 438 ≈ 9190."}]
---
# Design Drill: CDN offload #30

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
