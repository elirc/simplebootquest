---
slug: "sd02-cdn-offload-47"
title: "Design Drill: CDN offload #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**14,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~2900","~1450","~4060","~14,500"],"answer":2,"explanation":"Dynamic 2900 + cache misses 1160 ≈ 4060."},{"prompt":"**9500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~950","~9500","~1120","~190"],"answer":2,"explanation":"Dynamic 950 + cache misses 171 ≈ 1120."},{"prompt":"**34,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~18,113","~1730","~34,500","~17,250"],"answer":0,"explanation":"Dynamic 17,250 + cache misses 863 ≈ 18,113."},{"prompt":"**23,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2300","~23,000","~1150","~3340"],"answer":3,"explanation":"Dynamic 2300 + cache misses 1040 ≈ 3340."},{"prompt":"**17,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~875","~1750","~2540","~17,500"],"answer":2,"explanation":"Dynamic 1750 + cache misses 788 ≈ 2540."}]
---
# Design Drill: CDN offload #47

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
