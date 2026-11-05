---
slug: "sd02-cdn-offload-14"
title: "Design Drill: CDN offload #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**1500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~450","~30","~471","~1500"],"answer":2,"explanation":"Dynamic 450 + cache misses 21 ≈ 471."},{"prompt":"**38,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1930","~38,500","~5580","~3850"],"answer":2,"explanation":"Dynamic 3850 + cache misses 1730 ≈ 5580."},{"prompt":"**17,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1700","~2470","~17,000","~850"],"answer":1,"explanation":"Dynamic 1700 + cache misses 765 ≈ 2470."},{"prompt":"**11,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1150","~4600","~11,500","~5290"],"answer":3,"explanation":"Dynamic 4600 + cache misses 690 ≈ 5290."},{"prompt":"**9000 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~2520","~1800","~9000","~900"],"answer":0,"explanation":"Dynamic 1800 + cache misses 720 ≈ 2520."}]
---
# Design Drill: CDN offload #14

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
