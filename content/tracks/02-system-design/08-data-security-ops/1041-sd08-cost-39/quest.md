---
slug: "sd08-cost-39"
title: "Design Drill: Back-of-the-envelope costs #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1070 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$85.6","$770","$31,244","$7700"],"answer":1},{"prompt":"You serve **780 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$6320","$632","$25,623","$70.2"],"answer":1},{"prompt":"You serve **960 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$778","$7780","$86.4","$31,536"],"answer":0},{"prompt":"You serve **880 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$1580","$19,272","$15,840","$52.8"],"answer":0},{"prompt":"You serve **110 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$13.2","$4820","$3960","$396"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #39

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
