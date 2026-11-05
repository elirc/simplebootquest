---
slug: "sd08-cost-19"
title: "Design Drill: Back-of-the-envelope costs #19"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **700 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$22,995","$567","$5670","$63"],"answer":1},{"prompt":"You serve **680 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$40.8","$3670","$367","$14,892"],"answer":2},{"prompt":"You serve **1550 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$186","$67,890","$5580","$55,800"],"answer":2},{"prompt":"You serve **1320 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$594","$5940","$24,090","$66"],"answer":0},{"prompt":"You serve **860 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$30,960","$37,668","$3100","$103"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #19

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
