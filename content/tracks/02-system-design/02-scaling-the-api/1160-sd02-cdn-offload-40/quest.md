---
slug: "sd02-cdn-offload-40"
title: "Design Drill: CDN offload #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**6500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~650","~2990","~2600","~6500"],"answer":1,"explanation":"Dynamic 2600 + cache misses 390 ≈ 2990."},{"prompt":"**29,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~8850","~29,500","~9260","~590"],"answer":2,"explanation":"Dynamic 8850 + cache misses 413 ≈ 9260."},{"prompt":"**37,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~22,800","~37,500","~750","~22,500"],"answer":0,"explanation":"Dynamic 22,500 + cache misses 300 ≈ 22,800."},{"prompt":"**25,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~15,500","~15,000","~1250","~25,000"],"answer":0,"explanation":"Dynamic 15,000 + cache misses 500 ≈ 15,500."},{"prompt":"**3000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~1530","~1500","~3000","~60"],"answer":0,"explanation":"Dynamic 1500 + cache misses 30 ≈ 1530."}]
---
# Design Drill: CDN offload #40

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
