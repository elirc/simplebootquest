---
slug: "sd02-cdn-offload-37"
title: "Design Drill: CDN offload #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**35,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~35,500","~710","~4190","~3550"],"answer":2,"explanation":"Dynamic 3550 + cache misses 639 ≈ 4190."},{"prompt":"**10,000 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~3000","~10,000","~200","~3140"],"answer":3,"explanation":"Dynamic 3000 + cache misses 140 ≈ 3140."},{"prompt":"**6500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~2600","~2680","~6500","~130"],"answer":1,"explanation":"Dynamic 2600 + cache misses 78 ≈ 2680."},{"prompt":"**33,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~33,000","~1650","~13,200","~14,190"],"answer":3,"explanation":"Dynamic 13,200 + cache misses 990 ≈ 14,190."},{"prompt":"**1000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~20","~600","~608","~1000"],"answer":2,"explanation":"Dynamic 600 + cache misses 8 ≈ 608."}]
---
# Design Drill: CDN offload #37

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
