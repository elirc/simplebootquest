---
slug: "sd08-cost-21"
title: "Design Drill: Back-of-the-envelope costs #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **880 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$28,908","$7130","$713","$79.2"],"answer":2},{"prompt":"You serve **1100 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$36,135","$99","$2970","$29,700"],"answer":2},{"prompt":"You serve **1970 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$158","$14,184","$1420","$57,524"],"answer":2},{"prompt":"You serve **1370 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$60,006","$1480","$164","$14,796"],"answer":1},{"prompt":"You serve **1110 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$8990","$899","$36,464","$99.9"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #21

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
