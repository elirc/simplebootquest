---
slug: "sd08-cost-11"
title: "Design Drill: Back-of-the-envelope costs #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **460 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$15,111","$41.4","$373","$3730"],"answer":2},{"prompt":"You serve **1610 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$4350","$52,889","$43,470","$145"],"answer":0},{"prompt":"You serve **720 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$3240","$13,140","$324","$36"],"answer":2},{"prompt":"You serve **150 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$405","$13.5","$4050","$4930"],"answer":0},{"prompt":"You serve **1940 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1400","$13,968","$155","$56,648"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #11

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
