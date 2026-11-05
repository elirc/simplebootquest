---
slug: "sd02-cdn-offload-19"
title: "Design Drill: CDN offload #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**34,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~13,800","~14,214","~690","~34,500"],"answer":1,"explanation":"Dynamic 13,800 + cache misses 414 ≈ 14,214."},{"prompt":"**16,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3200","~16,000","~320","~3460"],"answer":3,"explanation":"Dynamic 3200 + cache misses 256 ≈ 3460."},{"prompt":"**33,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~3300","~6270","~33,000","~2970"],"answer":1,"explanation":"Dynamic 3300 + cache misses 2970 ≈ 6270."},{"prompt":"**24,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2450","~24,500","~1230","~3550"],"answer":3,"explanation":"Dynamic 2450 + cache misses 1100 ≈ 3550."},{"prompt":"**29,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~29,500","~2950","~8850","~10,915"],"answer":3,"explanation":"Dynamic 8850 + cache misses 2060 ≈ 10,915."}]
---
# Design Drill: CDN offload #19

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
