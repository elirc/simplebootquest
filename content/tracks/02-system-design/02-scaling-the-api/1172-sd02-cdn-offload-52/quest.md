---
slug: "sd02-cdn-offload-52"
title: "Design Drill: CDN offload #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**13,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~7900","~7800","~13,000","~260"],"answer":0,"explanation":"Dynamic 7800 + cache misses 104 ≈ 7900."},{"prompt":"**20,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~20,000","~8000","~9200","~2000"],"answer":2,"explanation":"Dynamic 8000 + cache misses 1200 ≈ 9200."},{"prompt":"**7000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~826","~7000","~700","~140"],"answer":0,"explanation":"Dynamic 700 + cache misses 126 ≈ 826."},{"prompt":"**13,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~675","~2700","~13,500","~3240"],"answer":3,"explanation":"Dynamic 2700 + cache misses 540 ≈ 3240."},{"prompt":"**32,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~6500","~650","~7020","~32,500"],"answer":2,"explanation":"Dynamic 6500 + cache misses 520 ≈ 7020."}]
---
# Design Drill: CDN offload #52

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
