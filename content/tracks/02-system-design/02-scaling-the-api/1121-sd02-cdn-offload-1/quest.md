---
slug: "sd02-cdn-offload-1"
title: "Design Drill: CDN offload #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**23,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~10,810","~9400","~2350","~23,500"],"answer":0,"explanation":"Dynamic 9400 + cache misses 1410 ≈ 10,810."},{"prompt":"**22,000 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~11,220","~11,000","~22,000","~440"],"answer":0,"explanation":"Dynamic 11,000 + cache misses 220 ≈ 11,220."},{"prompt":"**33,500 req/s** arrive. **80%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~33,500","~1680","~6700","~8040"],"answer":3,"explanation":"Dynamic 6700 + cache misses 1340 ≈ 8040."},{"prompt":"**500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~300","~500","~304","~10"],"answer":2,"explanation":"Dynamic 300 + cache misses 4 ≈ 304."},{"prompt":"**20,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~20,000","~8000","~400","~8240"],"answer":3,"explanation":"Dynamic 8000 + cache misses 240 ≈ 8240."}]
---
# Design Drill: CDN offload #1

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
