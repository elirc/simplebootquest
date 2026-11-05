---
slug: "sd02-cdn-offload-5"
title: "Design Drill: CDN offload #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**35,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~17,500","~3500","~19,250","~35,000"],"answer":2,"explanation":"Dynamic 17,500 + cache misses 1750 ≈ 19,250."},{"prompt":"**9500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~4090","~9500","~475","~3800"],"answer":0,"explanation":"Dynamic 3800 + cache misses 285 ≈ 4090."},{"prompt":"**4000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~2400","~4000","~400","~2560"],"answer":3,"explanation":"Dynamic 2400 + cache misses 160 ≈ 2560."},{"prompt":"**35,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~21,000","~1750","~21,700","~35,000"],"answer":2,"explanation":"Dynamic 21,000 + cache misses 700 ≈ 21,700."},{"prompt":"**14,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~1710","~1450","~14,500","~290"],"answer":0,"explanation":"Dynamic 1450 + cache misses 261 ≈ 1710."}]
---
# Design Drill: CDN offload #5

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
