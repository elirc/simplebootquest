---
slug: "sd08-cost-3"
title: "Design Drill: Back-of-the-envelope costs #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1670 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1800","$18,036","$200","$73,146"],"answer":0},{"prompt":"You serve **1140 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$6160","$68.4","$24,966","$616"],"answer":3},{"prompt":"You serve **1590 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$46,428","$1140","$127","$11,448"],"answer":1},{"prompt":"You serve **210 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1700","$6900","$170","$18.9"],"answer":2},{"prompt":"You serve **1640 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$131","$39,360","$3940","$47,888"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #3

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
