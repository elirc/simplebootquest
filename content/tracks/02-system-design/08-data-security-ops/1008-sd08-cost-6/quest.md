---
slug: "sd08-cost-6"
title: "Design Drill: Back-of-the-envelope costs #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1980 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$5350","$65,043","$178","$53,460"],"answer":0},{"prompt":"You serve **580 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$13,920","$46.4","$16,936","$1390"],"answer":3},{"prompt":"You serve **1760 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$26,400","$2640","$88","$32,120"],"answer":1},{"prompt":"You serve **870 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$6260","$69.6","$25,404","$626"],"answer":3},{"prompt":"You serve **180 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$810","$9","$81","$3290"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #6

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
