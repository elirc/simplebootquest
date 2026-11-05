---
slug: "sd02-cdn-offload-44"
title: "Design Drill: CDN offload #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**4000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~80","~2430","~2400","~4000"],"answer":1,"explanation":"Dynamic 2400 + cache misses 32 ≈ 2430."},{"prompt":"**14,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~5800","~725","~6240","~14,500"],"answer":2,"explanation":"Dynamic 5800 + cache misses 435 ≈ 6240."},{"prompt":"**39,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~10,920","~7800","~39,000","~3900"],"answer":0,"explanation":"Dynamic 7800 + cache misses 3120 ≈ 10,920."},{"prompt":"**8500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~5270","~5100","~8500","~425"],"answer":0,"explanation":"Dynamic 5100 + cache misses 170 ≈ 5270."},{"prompt":"**20,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~20,000","~4000","~400","~4320"],"answer":3,"explanation":"Dynamic 4000 + cache misses 320 ≈ 4320."}]
---
# Design Drill: CDN offload #44

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
