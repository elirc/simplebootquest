---
slug: "sd02-cdn-offload-18"
title: "Design Drill: CDN offload #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**10,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2100","~2520","~525","~10,500"],"answer":1,"explanation":"Dynamic 2100 + cache misses 420 ≈ 2520."},{"prompt":"**29,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~8700","~580","~29,000","~9110"],"answer":3,"explanation":"Dynamic 8700 + cache misses 406 ≈ 9110."},{"prompt":"**6500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~767","~130","~650","~6500"],"answer":0,"explanation":"Dynamic 650 + cache misses 117 ≈ 767."},{"prompt":"**20,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2970","~2050","~20,500","~1030"],"answer":0,"explanation":"Dynamic 2050 + cache misses 923 ≈ 2970."},{"prompt":"**28,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~28,000","~2800","~560","~3300"],"answer":3,"explanation":"Dynamic 2800 + cache misses 504 ≈ 3300."}]
---
# Design Drill: CDN offload #18

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
