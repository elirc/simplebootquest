---
slug: "sd08-cost-31"
title: "Design Drill: Back-of-the-envelope costs #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **270 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$11,826","$32.4","$292","$2920"],"answer":2},{"prompt":"You serve **490 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$3970","$16,097","$44.1","$397"],"answer":3},{"prompt":"You serve **1250 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$22,500","$27,375","$75","$2250"],"answer":3},{"prompt":"You serve **1070 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$96.3","$8670","$867","$35,150"],"answer":2},{"prompt":"You serve **930 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$2230","$74.4","$22,320","$27,156"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #31

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
