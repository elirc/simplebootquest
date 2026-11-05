---
slug: "sd02-cdn-offload-28"
title: "Design Drill: CDN offload #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~10","~59","~50","~500"],"answer":1,"explanation":"Dynamic 50 + cache misses 9 ≈ 59."},{"prompt":"**33,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1650","~33,000","~16,500","~17,325"],"answer":3,"explanation":"Dynamic 16,500 + cache misses 825 ≈ 17,325."},{"prompt":"**1500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1500","~900","~960","~150"],"answer":2,"explanation":"Dynamic 900 + cache misses 60 ≈ 960."},{"prompt":"**6000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~300","~3150","~6000","~3000"],"answer":1,"explanation":"Dynamic 3000 + cache misses 150 ≈ 3150."},{"prompt":"**36,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3650","~4310","~730","~36,500"],"answer":1,"explanation":"Dynamic 3650 + cache misses 657 ≈ 4310."}]
---
# Design Drill: CDN offload #28

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
