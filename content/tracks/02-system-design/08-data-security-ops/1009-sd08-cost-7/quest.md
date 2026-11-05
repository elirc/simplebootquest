---
slug: "sd08-cost-7"
title: "Design Drill: Back-of-the-envelope costs #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **390 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1760","$7120","$19.5","$176"],"answer":3},{"prompt":"You serve **1890 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$4540","$55,188","$151","$45,360"],"answer":0},{"prompt":"You serve **1530 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1240","$50,261","$138","$12,393"],"answer":0},{"prompt":"You serve **190 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$2850","$285","$9.5","$3470"],"answer":1},{"prompt":"You serve **1260 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$907","$9070","$36,792","$101"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #7

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
