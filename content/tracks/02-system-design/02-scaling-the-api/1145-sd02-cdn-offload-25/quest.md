---
slug: "sd02-cdn-offload-25"
title: "Design Drill: CDN offload #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**28,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~13,110","~28,500","~11,400","~2850"],"answer":0,"explanation":"Dynamic 11,400 + cache misses 1710 ≈ 13,110."},{"prompt":"**13,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~8060","~650","~7800","~13,000"],"answer":0,"explanation":"Dynamic 7800 + cache misses 260 ≈ 8060."},{"prompt":"**2500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~295","~2500","~250","~50"],"answer":0,"explanation":"Dynamic 250 + cache misses 45 ≈ 295."},{"prompt":"**11,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~11,500","~3220","~2300","~1150"],"answer":1,"explanation":"Dynamic 2300 + cache misses 920 ≈ 3220."},{"prompt":"**6500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3950","~3900","~6500","~130"],"answer":0,"explanation":"Dynamic 3900 + cache misses 52 ≈ 3950."}]
---
# Design Drill: CDN offload #25

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
