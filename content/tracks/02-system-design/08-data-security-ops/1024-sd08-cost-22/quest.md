---
slug: "sd08-cost-22"
title: "Design Drill: Back-of-the-envelope costs #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1460 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$11,826","$47,961","$131","$1180"],"answer":3},{"prompt":"You serve **1500 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$675","$6750","$75","$27,375"],"answer":0},{"prompt":"You serve **600 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$13,140","$3240","$324","$36"],"answer":2},{"prompt":"You serve **1210 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$109","$39,749","$32,670","$3270"],"answer":3},{"prompt":"You serve **1140 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$12,312","$1230","$49,932","$137"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #22

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
