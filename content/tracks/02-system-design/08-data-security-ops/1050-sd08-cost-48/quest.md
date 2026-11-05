---
slug: "sd08-cost-48"
title: "Design Drill: Back-of-the-envelope costs #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1060 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$95.4","$8590","$34,821","$859"],"answer":3},{"prompt":"You serve **250 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$900","$10,950","$30","$9000"],"answer":0},{"prompt":"You serve **1040 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1120","$45,552","$11,232","$125"],"answer":0},{"prompt":"You serve **1440 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$3890","$38,880","$130","$47,304"],"answer":0},{"prompt":"You serve **90 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$10.8","$3940","$324","$3240"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #48

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
