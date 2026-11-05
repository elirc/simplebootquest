---
slug: "sd02-cdn-offload-46"
title: "Design Drill: CDN offload #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**9500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~4750","~9500","~190","~4850"],"answer":3,"explanation":"Dynamic 4750 + cache misses 95 ≈ 4850."},{"prompt":"**39,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~17,940","~3900","~15,600","~39,000"],"answer":0,"explanation":"Dynamic 15,600 + cache misses 2340 ≈ 17,940."},{"prompt":"**25,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~15,000","~500","~25,000","~15,200"],"answer":3,"explanation":"Dynamic 15,000 + cache misses 200 ≈ 15,200."},{"prompt":"**32,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~9600","~10,720","~1600","~32,000"],"answer":1,"explanation":"Dynamic 9600 + cache misses 1120 ≈ 10,720."},{"prompt":"**18,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~18,000","~9000","~9180","~360"],"answer":2,"explanation":"Dynamic 9000 + cache misses 180 ≈ 9180."}]
---
# Design Drill: CDN offload #46

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
