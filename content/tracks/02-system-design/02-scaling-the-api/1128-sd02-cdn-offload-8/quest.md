---
slug: "sd02-cdn-offload-8"
title: "Design Drill: CDN offload #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**27,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~27,500","~16,500","~2750","~17,600"],"answer":3,"explanation":"Dynamic 16,500 + cache misses 1100 ≈ 17,600."},{"prompt":"**39,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~23,400","~39,000","~24,180","~1950"],"answer":2,"explanation":"Dynamic 23,400 + cache misses 780 ≈ 24,180."},{"prompt":"**32,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~16,250","~650","~16,575","~32,500"],"answer":2,"explanation":"Dynamic 16,250 + cache misses 325 ≈ 16,575."},{"prompt":"**3500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1930","~3500","~350","~1750"],"answer":0,"explanation":"Dynamic 1750 + cache misses 175 ≈ 1930."},{"prompt":"**39,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3950","~790","~4660","~39,500"],"answer":2,"explanation":"Dynamic 3950 + cache misses 711 ≈ 4660."}]
---
# Design Drill: CDN offload #8

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
