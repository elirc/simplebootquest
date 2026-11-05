---
slug: "sd02-cdn-offload-57"
title: "Design Drill: CDN offload #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"**500 req/s** arrive. **40%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~50","~320","~300","~500"],"answer":1,"explanation":"Dynamic 300 + cache misses 20 ≈ 320."},{"prompt":"**500 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~200","~10","~500","~206"],"answer":3,"explanation":"Dynamic 200 + cache misses 6 ≈ 206."},{"prompt":"**33,500 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **98%** of those. How many req/s reach your servers?","options":["~33,500","~3950","~670","~3350"],"answer":1,"explanation":"Dynamic 3350 + cache misses 603 ≈ 3950."},{"prompt":"**18,000 req/s** arrive. **90%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~1800","~18,000","~1620","~3420"],"answer":3,"explanation":"Dynamic 1800 + cache misses 1620 ≈ 3420."},{"prompt":"**16,000 req/s** arrive. **60%** are cacheable static requests, and the CDN hits **90%** of those. How many req/s reach your servers?","options":["~6400","~16,000","~7360","~1600"],"answer":2,"explanation":"Dynamic 6400 + cache misses 960 ≈ 7360."}]
---
# Design Drill: CDN offload #57

If a CDN serves a fraction h of requests (its **hit ratio**), only (1 − h) of the traffic reaches your servers.
