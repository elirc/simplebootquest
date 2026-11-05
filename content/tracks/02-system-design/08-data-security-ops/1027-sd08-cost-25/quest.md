---
slug: "sd08-cost-25"
title: "Design Drill: Back-of-the-envelope costs #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **650 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$11,700","$1170","$14,235","$39"],"answer":1},{"prompt":"You serve **1440 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$26,280","$72","$6480","$648"],"answer":3},{"prompt":"You serve **1000 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$15,000","$18,250","$50","$1500"],"answer":3},{"prompt":"You serve **1110 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$7990","$799","$88.8","$32,412"],"answer":1},{"prompt":"You serve **1390 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$626","$69.5","$25,368","$6260"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #25

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
