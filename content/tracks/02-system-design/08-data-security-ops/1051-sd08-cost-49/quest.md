---
slug: "sd08-cost-49"
title: "Design Drill: Back-of-the-envelope costs #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1330 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$9580","$958","$38,836","$106"],"answer":1},{"prompt":"You serve **1250 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$13,500","$1350","$150","$54,750"],"answer":1},{"prompt":"You serve **60 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$432","$4.8","$1750","$43.2"],"answer":3},{"prompt":"You serve **190 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1540","$6240","$17.1","$154"],"answer":3},{"prompt":"You serve **1600 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$28,800","$35,040","$2880","$96"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #49

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
