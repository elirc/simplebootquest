---
slug: "sd02-cdn-offload-13"
title: "Design Drill: CDN offload #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**37,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3750","~37,500","~750","~4430"],"answer":3,"explanation":"Dynamic 3750 + cache misses 675 ≈ 4430."},{"prompt":"**16,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~9600","~16,000","~1600","~10,240"],"answer":3,"explanation":"Dynamic 9600 + cache misses 640 ≈ 10,240."},{"prompt":"**16,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~16,000","~320","~6590","~6400"],"answer":2,"explanation":"Dynamic 6400 + cache misses 192 ≈ 6590."},{"prompt":"**2500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~125","~2500","~500","~600"],"answer":3,"explanation":"Dynamic 500 + cache misses 100 ≈ 600."},{"prompt":"**36,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1830","~36,500","~15,695","~14,600"],"answer":2,"explanation":"Dynamic 14,600 + cache misses 1100 ≈ 15,695."}]
---
# Design Drill: CDN offload #13

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
