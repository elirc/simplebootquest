---
slug: "sd08-cost-35"
title: "Design Drill: Back-of-the-envelope costs #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1980 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$14,256","$1430","$57,816","$158"],"answer":1},{"prompt":"You serve **10 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$108","$438","$10.8","$1.2"],"answer":2},{"prompt":"You serve **1810 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$14,661","$59,459","$163","$1470"],"answer":3},{"prompt":"You serve **1710 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$103","$923","$37,449","$9230"],"answer":1},{"prompt":"You serve **480 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$57.6","$21,024","$17,280","$1730"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #35

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
