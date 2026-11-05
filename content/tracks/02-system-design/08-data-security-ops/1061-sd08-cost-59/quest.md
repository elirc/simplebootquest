---
slug: "sd08-cost-59"
title: "Design Drill: Back-of-the-envelope costs #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1940 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$15,714","$1570","$63,729","$175"],"answer":1},{"prompt":"You serve **350 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1580","$17.5","$158","$6390"],"answer":2},{"prompt":"You serve **450 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$13,140","$3240","$36","$324"],"answer":3},{"prompt":"You serve **700 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$12,775","$315","$35","$3150"],"answer":1},{"prompt":"You serve **730 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$31,974","$2630","$87.6","$26,280"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #59

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
