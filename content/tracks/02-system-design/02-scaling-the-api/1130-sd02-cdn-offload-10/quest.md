---
slug: "sd02-cdn-offload-10"
title: "Design Drill: CDN offload #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**23,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1180","~11,750","~12,338","~23,500"],"answer":2,"explanation":"Dynamic 11,750 + cache misses 588 ≈ 12,338."},{"prompt":"**15,500 req/s** arrive. **70%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~4650","~15,500","~775","~5190"],"answer":3,"explanation":"Dynamic 4650 + cache misses 543 ≈ 5190."},{"prompt":"**29,500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~29,500","~17,700","~18,880","~2950"],"answer":2,"explanation":"Dynamic 17,700 + cache misses 1180 ≈ 18,880."},{"prompt":"**38,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~19,000","~760","~38,000","~19,380"],"answer":3,"explanation":"Dynamic 19,000 + cache misses 380 ≈ 19,380."},{"prompt":"**12,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~12,000","~7300","~240","~7200"],"answer":1,"explanation":"Dynamic 7200 + cache misses 96 ≈ 7300."}]
---
# Design Drill: CDN offload #10

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
