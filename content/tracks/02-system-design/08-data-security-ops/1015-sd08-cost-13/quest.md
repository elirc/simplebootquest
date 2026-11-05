---
slug: "sd08-cost-13"
title: "Design Drill: Back-of-the-envelope costs #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1170 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$93.6","$34,164","$2810","$28,080"],"answer":2},{"prompt":"You serve **1620 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$130","$38,880","$3890","$47,304"],"answer":2},{"prompt":"You serve **140 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$210","$7","$2560","$2100"],"answer":0},{"prompt":"You serve **1450 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$72.5","$653","$6530","$26,463"],"answer":1},{"prompt":"You serve **1810 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$217","$1950","$19,548","$79,278"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #13

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
