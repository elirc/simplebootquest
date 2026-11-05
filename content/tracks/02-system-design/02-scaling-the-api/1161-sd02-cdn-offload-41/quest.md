---
slug: "sd02-cdn-offload-41"
title: "Design Drill: CDN offload #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**36,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~18,000","~3600","~36,000","~19,800"],"answer":3,"explanation":"Dynamic 18,000 + cache misses 1800 ≈ 19,800."},{"prompt":"**30,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~30,000","~18,000","~19,200","~3000"],"answer":2,"explanation":"Dynamic 18,000 + cache misses 1200 ≈ 19,200."},{"prompt":"**1500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~690","~1500","~600","~150"],"answer":0,"explanation":"Dynamic 600 + cache misses 90 ≈ 690."},{"prompt":"**14,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~7250","~14,500","~7610","~725"],"answer":2,"explanation":"Dynamic 7250 + cache misses 363 ≈ 7610."},{"prompt":"**17,000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~17,000","~3670","~340","~3400"],"answer":1,"explanation":"Dynamic 3400 + cache misses 272 ≈ 3670."}]
---
# Design Drill: CDN offload #41

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
