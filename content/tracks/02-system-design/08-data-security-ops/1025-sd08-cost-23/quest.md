---
slug: "sd08-cost-23"
title: "Design Drill: Back-of-the-envelope costs #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **650 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$58.5","$1760","$17,550","$21,353"],"answer":1},{"prompt":"You serve **1610 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$725","$7250","$80.5","$29,383"],"answer":0},{"prompt":"You serve **1430 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$129","$1160","$46,976","$11,583"],"answer":1},{"prompt":"You serve **470 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$15,440","$1270","$12,690","$42.3"],"answer":1},{"prompt":"You serve **1210 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$2180","$26,499","$21,780","$72.6"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #23

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
