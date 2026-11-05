---
slug: "sd08-cost-53"
title: "Design Drill: Back-of-the-envelope costs #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **840 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$378","$15,330","$42","$3780"],"answer":0},{"prompt":"You serve **1300 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$585","$65","$5850","$23,725"],"answer":0},{"prompt":"You serve **530 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$1430","$17,411","$14,310","$47.7"],"answer":0},{"prompt":"You serve **1260 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1020","$113","$10,206","$41,391"],"answer":0},{"prompt":"You serve **530 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$17,411","$429","$47.7","$4290"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #53

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
