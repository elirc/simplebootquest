---
slug: "sd08-cost-50"
title: "Design Drill: Back-of-the-envelope costs #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **890 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$1340","$16,243","$13,350","$44.5"],"answer":0},{"prompt":"You serve **1840 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$33,120","$110","$3310","$40,296"],"answer":2},{"prompt":"You serve **1300 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$46,800","$56,940","$4680","$156"],"answer":2},{"prompt":"You serve **1530 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$33,507","$826","$8260","$91.8"],"answer":1},{"prompt":"You serve **510 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$9310","$25.5","$230","$2300"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #50

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
