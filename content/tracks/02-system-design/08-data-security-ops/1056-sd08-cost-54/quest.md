---
slug: "sd08-cost-54"
title: "Design Drill: Back-of-the-envelope costs #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1700 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$45,900","$4590","$153","$55,845"],"answer":1},{"prompt":"You serve **1740 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$209","$6260","$76,212","$62,640"],"answer":1},{"prompt":"You serve **1940 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$8730","$97","$35,405","$873"],"answer":3},{"prompt":"You serve **1390 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$2500","$83.4","$30,441","$25,020"],"answer":0},{"prompt":"You serve **300 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$13,140","$36","$3240","$324"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #54

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
