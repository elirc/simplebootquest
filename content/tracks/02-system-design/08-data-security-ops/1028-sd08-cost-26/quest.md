---
slug: "sd08-cost-26"
title: "Design Drill: Back-of-the-envelope costs #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **920 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$20,148","$4970","$497","$55.2"],"answer":2},{"prompt":"You serve **1080 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$3890","$47,304","$38,880","$130"],"answer":0},{"prompt":"You serve **630 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$22,680","$2270","$75.6","$27,594"],"answer":1},{"prompt":"You serve **1820 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$91","$8190","$33,215","$819"],"answer":3},{"prompt":"You serve **1800 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$108","$9720","$972","$39,420"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #26

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
