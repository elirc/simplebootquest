---
slug: "sd02-cdn-offload-6"
title: "Design Drill: CDN offload #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**32,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~19,840","~32,000","~19,200","~1600"],"answer":0,"explanation":"Dynamic 19,200 + cache misses 640 ≈ 19,840."},{"prompt":"**39,000 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~3900","~23,400","~24,960","~39,000"],"answer":2,"explanation":"Dynamic 23,400 + cache misses 1560 ≈ 24,960."},{"prompt":"**2500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **95%** of those. How many req/s reach your servers?","options":["~1310","~1250","~2500","~125"],"answer":0,"explanation":"Dynamic 1250 + cache misses 62.5 ≈ 1310."},{"prompt":"**35,500 req/s** arrive. **50%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~35,500","~19,525","~3550","~17,750"],"answer":1,"explanation":"Dynamic 17,750 + cache misses 1770 ≈ 19,525."},{"prompt":"**38,500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~15,862","~15,400","~38,500","~770"],"answer":0,"explanation":"Dynamic 15,400 + cache misses 462 ≈ 15,862."}]
---
# Design Drill: CDN offload #6

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
