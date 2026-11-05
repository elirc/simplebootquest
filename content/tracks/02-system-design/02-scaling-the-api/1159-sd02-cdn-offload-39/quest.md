---
slug: "sd02-cdn-offload-39"
title: "Design Drill: CDN offload #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~555","~450","~150","~1500"],"answer":0,"explanation":"Dynamic 450 + cache misses 105 ≈ 555."},{"prompt":"**2000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~40","~400","~432","~2000"],"answer":2,"explanation":"Dynamic 400 + cache misses 32 ≈ 432."},{"prompt":"**36,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~720","~4250","~36,000","~3600"],"answer":1,"explanation":"Dynamic 3600 + cache misses 648 ≈ 4250."},{"prompt":"**18,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~370","~11,248","~11,100","~18,500"],"answer":1,"explanation":"Dynamic 11,100 + cache misses 148 ≈ 11,248."},{"prompt":"**11,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~11,500","~6990","~230","~6900"],"answer":1,"explanation":"Dynamic 6900 + cache misses 92 ≈ 6990."}]
---
# Design Drill: CDN offload #39

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
