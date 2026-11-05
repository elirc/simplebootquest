---
slug: "sd08-cost-5"
title: "Design Drill: Back-of-the-envelope costs #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **410 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$36.9","$3320","$332","$13,469"],"answer":2},{"prompt":"You serve **910 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$81.9","$29,894","$24,570","$2460"],"answer":3},{"prompt":"You serve **190 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$22.8","$6840","$8320","$684"],"answer":3},{"prompt":"You serve **1370 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$123","$45,005","$36,990","$3700"],"answer":3},{"prompt":"You serve **760 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$24,966","$68.4","$6160","$616"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #5

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.
