---
slug: "sd02-cdn-offload-45"
title: "Design Drill: CDN offload #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**33,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~33,500","~3350","~15,410","~13,400"],"answer":2,"explanation":"Dynamic 13,400 + cache misses 2010 ≈ 15,410."},{"prompt":"**29,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~29,000","~18,560","~17,400","~2900"],"answer":1,"explanation":"Dynamic 17,400 + cache misses 1160 ≈ 18,560."},{"prompt":"**20,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1800","~20,000","~2000","~3800"],"answer":3,"explanation":"Dynamic 2000 + cache misses 1800 ≈ 3800."},{"prompt":"**15,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~9300","~15,500","~1550","~9920"],"answer":3,"explanation":"Dynamic 9300 + cache misses 620 ≈ 9920."},{"prompt":"**4500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~2790","~225","~4500","~2700"],"answer":0,"explanation":"Dynamic 2700 + cache misses 90 ≈ 2790."}]
---
# Design Drill: CDN offload #45

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
