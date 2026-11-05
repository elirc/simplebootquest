---
slug: "sd08-cost-17"
title: "Design Drill: Back-of-the-envelope costs #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1440 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$63,072","$51,840","$5180","$173"],"answer":2},{"prompt":"You serve **110 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$2410","$198","$6.6","$1980"],"answer":1},{"prompt":"You serve **920 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$24,840","$82.8","$30,222","$2480"],"answer":3},{"prompt":"You serve **1680 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1360","$13,608","$55,188","$151"],"answer":0},{"prompt":"You serve **1450 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$26,100","$31,755","$2610","$87"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #17

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
