---
slug: "sd08-cost-10"
title: "Design Drill: Back-of-the-envelope costs #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **410 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$7480","$20.5","$1850","$185"],"answer":3},{"prompt":"You serve **240 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$5260","$130","$14.4","$1300"],"answer":1},{"prompt":"You serve **1570 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$78.5","$28,653","$2360","$23,550"],"answer":2},{"prompt":"You serve **1450 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$87","$783","$7830","$31,755"],"answer":1},{"prompt":"You serve **110 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$264","$3210","$2640","$8.8"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #10

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
