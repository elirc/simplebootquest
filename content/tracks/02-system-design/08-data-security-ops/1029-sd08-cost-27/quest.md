---
slug: "sd08-cost-27"
title: "Design Drill: Back-of-the-envelope costs #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1580 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$853","$8530","$34,602","$94.8"],"answer":0},{"prompt":"You serve **1000 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$27,000","$32,850","$90","$2700"],"answer":3},{"prompt":"You serve **1420 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$170","$1530","$62,196","$15,336"],"answer":1},{"prompt":"You serve **900 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$13,500","$1350","$16,425","$45"],"answer":1},{"prompt":"You serve **1790 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$6440","$78,402","$64,440","$215"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #27

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
