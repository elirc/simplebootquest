---
slug: "sd08-cost-55"
title: "Design Drill: Back-of-the-envelope costs #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1160 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$21,170","$5220","$522","$58"],"answer":2},{"prompt":"You serve **290 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$157","$1570","$6350","$17.4"],"answer":0},{"prompt":"You serve **1160 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$33,872","$27,840","$92.8","$2780"],"answer":3},{"prompt":"You serve **860 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$4640","$51.6","$464","$18,834"],"answer":2},{"prompt":"You serve **1100 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$26,400","$2640","$32,120","$88"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #55

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
