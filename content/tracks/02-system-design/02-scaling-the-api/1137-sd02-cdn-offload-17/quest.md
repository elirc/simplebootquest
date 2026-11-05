---
slug: "sd02-cdn-offload-17"
title: "Design Drill: CDN offload #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**6000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~6000","~1440","~300","~1200"],"answer":1,"explanation":"Dynamic 1200 + cache misses 240 ≈ 1440."},{"prompt":"**1500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~930","~1500","~75","~900"],"answer":0,"explanation":"Dynamic 900 + cache misses 30 ≈ 930."},{"prompt":"**25,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~14,025","~25,500","~12,750","~2550"],"answer":0,"explanation":"Dynamic 12,750 + cache misses 1270 ≈ 14,025."},{"prompt":"**33,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~33,500","~21,440","~20,100","~3350"],"answer":1,"explanation":"Dynamic 20,100 + cache misses 1340 ≈ 21,440."},{"prompt":"**12,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~625","~12,500","~5380","~5000"],"answer":2,"explanation":"Dynamic 5000 + cache misses 375 ≈ 5380."}]
---
# Design Drill: CDN offload #17

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
