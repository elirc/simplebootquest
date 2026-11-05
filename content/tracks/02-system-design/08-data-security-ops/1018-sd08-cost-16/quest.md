---
slug: "sd08-cost-16"
title: "Design Drill: Back-of-the-envelope costs #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1090 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$23,871","$65.4","$1960","$19,620"],"answer":2},{"prompt":"You serve **140 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1010","$11.2","$4090","$101"],"answer":3},{"prompt":"You serve **1490 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$65,262","$179","$5360","$53,640"],"answer":2},{"prompt":"You serve **520 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$421","$46.8","$17,082","$4210"],"answer":0},{"prompt":"You serve **1410 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$70.5","$6350","$25,733","$635"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #16

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
