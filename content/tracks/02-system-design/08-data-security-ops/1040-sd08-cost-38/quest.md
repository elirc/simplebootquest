---
slug: "sd08-cost-38"
title: "Design Drill: Back-of-the-envelope costs #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **570 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$45.6","$1370","$16,644","$13,680"],"answer":1},{"prompt":"You serve **1630 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$4400","$53,546","$44,010","$147"],"answer":0},{"prompt":"You serve **1290 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$46,440","$4640","$56,502","$155"],"answer":1},{"prompt":"You serve **570 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$28.5","$257","$2570","$10,403"],"answer":1},{"prompt":"You serve **1180 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$21,240","$2120","$25,842","$70.8"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #38

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
