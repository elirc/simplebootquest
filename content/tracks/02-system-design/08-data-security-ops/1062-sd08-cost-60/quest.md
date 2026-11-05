---
slug: "sd08-cost-60"
title: "Design Drill: Back-of-the-envelope costs #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1520 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$91.2","$33,288","$821","$8210"],"answer":2},{"prompt":"You serve **840 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$75.6","$680","$27,594","$6800"],"answer":1},{"prompt":"You serve **350 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$6300","$7670","$21","$630"],"answer":3},{"prompt":"You serve **170 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$20.4","$7450","$184","$1840"],"answer":2},{"prompt":"You serve **570 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$308","$3080","$34.2","$12,483"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #60

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
