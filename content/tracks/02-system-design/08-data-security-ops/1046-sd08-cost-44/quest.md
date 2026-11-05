---
slug: "sd08-cost-44"
title: "Design Drill: Back-of-the-envelope costs #44"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **40 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$2.4","$21.6","$216","$876"],"answer":1},{"prompt":"You serve **650 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$1560","$18,980","$15,600","$52"],"answer":0},{"prompt":"You serve **110 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$2010","$495","$5.5","$49.5"],"answer":3},{"prompt":"You serve **1630 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$29,748","$81.5","$7340","$734"],"answer":3},{"prompt":"You serve **1790 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$143","$42,960","$4300","$52,268"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #44

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
